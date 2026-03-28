import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { version, data, submittedAt } = body;

    // === GOOGLE SHEETS ===
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const sheetName = version === 'private' ? 'Private Metadata' : `Brief — ${version}`;

        // Build row: timestamp, version, then all field values
        const row = [
          submittedAt || new Date().toISOString(),
          version,
          ...Object.entries(data).map(([key, val]) =>
            Array.isArray(val) ? val.join(', ') : (val || '')
          ),
        ];

        // Build header row from keys
        const headers = [
          'Submitted At',
          'Version',
          ...Object.keys(data),
        ];

        // Check if sheet exists, create if not
        const spreadsheet = await sheets.spreadsheets.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
        });

        const existingSheet = spreadsheet.data.sheets?.find(
          (s) => s.properties?.title === sheetName
        );

        if (!existingSheet) {
          await sheets.spreadsheets.batchUpdate({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            requestBody: {
              requests: [{ addSheet: { properties: { title: sheetName } } }],
            },
          });
          // Add headers
          await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `'${sheetName}'!A1`,
            valueInputOption: 'RAW',
            requestBody: { values: [headers] },
          });
        }

        // Append data
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: `'${sheetName}'!A1`,
          valueInputOption: 'RAW',
          requestBody: { values: [row] },
        });
      } catch (sheetErr) {
        console.error('Google Sheets error:', sheetErr.message);
      }
    }

    // === EMAIL NOTIFICATION ===
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD && process.env.NOTIFY_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
          },
        });

        // Build readable email body
        const clientName = data.a_name || data.b_name || data.c_contact || data.p_client || 'Unknown';
        const fields = Object.entries(data)
          .filter(([, v]) => v && (Array.isArray(v) ? v.length > 0 : v.toString().trim()))
          .map(([key, val]) => {
            const label = key
              .replace(/^[abcp]_/, '')
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (s) => s.toUpperCase());
            const value = Array.isArray(val) ? val.join(', ') : val;
            return `<tr><td style="padding:8px 12px;font-weight:600;color:#4a3d5c;vertical-align:top;white-space:nowrap;border-bottom:1px solid #e8e3f0;">${label}</td><td style="padding:8px 12px;color:#1a1025;border-bottom:1px solid #e8e3f0;">${value}</td></tr>`;
          })
          .join('');

        const isPrivate = version === 'private';
        const subject = isPrivate
          ? `[PRIVATE] Project Metadata — ${clientName}`
          : `New Brief Submission — ${clientName} (Version ${version.toUpperCase()})`;

        const html = `
          <div style="font-family:'DM Sans',Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;">
            <div style="background:${isPrivate ? '#0d0a12' : '#6801C2'};padding:24px 32px;border-radius:12px 12px 0 0;">
              <p style="color:${isPrivate ? '#ff4d4d' : '#e8e3f0'};font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">
                ${isPrivate ? 'PRIVATE — DO NOT SHARE' : 'New Brief Submission'}
              </p>
              <h1 style="color:#ffffff;font-size:22px;margin:0;">${clientName}</h1>
              <p style="color:${isPrivate ? '#5a5a60' : '#c0bcff'};font-size:14px;margin:4px 0 0;">
                Version ${version.toUpperCase()} · ${new Date(submittedAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e8e3f0;border-top:none;">
              ${fields}
            </table>
            <div style="padding:16px 32px;background:#f5f3f8;border-radius:0 0 12px 12px;border:1px solid #e8e3f0;border-top:none;">
              <p style="color:#655a78;font-size:13px;margin:0;">Ashley M. Pickett · Project Brief System</p>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Project Brief" <${process.env.SMTP_EMAIL}>`,
          to: process.env.NOTIFY_EMAIL,
          subject,
          html,
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr.message);
      }
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Submit error:', err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
