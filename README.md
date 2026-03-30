# The Designer's Seed

A guided workbook for planning websites, apps, and brands. Built for Ashley M. Pickett's client intake process.

**Free to use. No credit card required.**

---

## What This Does

**Client Flow:**
1. Client picks Version A (has a vision) or Version B (needs help figuring it out)
2. Version A can choose: deep dive first, or quick brief first
3. Fills out the chosen brief + detailed project guide
4. Data submits to Google Sheets + email notification to you

**Designer Flow:**
1. Toggle to Designer View
2. Fill in private metadata online OR download the PDF
3. Online version saves to a "Private Metadata" tab in the same sheet

---

## Quick Setup (5 Steps)

### 1. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Fork or push this repo to GitHub
2. Connect to Vercel
3. Add environment variables (see below)
4. Deploy!

### 2. Environment Variables

| Variable | Where to Find It |
|----------|-----------------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | GCP Console → Service Account → Email |
| `GOOGLE_PRIVATE_KEY` | GCP Console → Service Account → Keys → JSON |
| `GOOGLE_SHEET_ID` | Google Sheets URL: `sheets.google.com/d/THIS_PART/edit` |
| `SMTP_EMAIL` | Your Gmail address |
| `SMTP_PASSWORD` | Gmail App Password (myaccount.google.com/apppasswords) |
| `NOTIFY_EMAIL` | Where you want notifications sent |

### 3. Google Sheets Setup

1. Create a new spreadsheet
2. Create a GCP project with Google Sheets API enabled
3. Create a Service Account with Editor role
4. Download the JSON key file
5. Share your spreadsheet with the service account email

### 4. Email Notifications (Gmail)

1. Enable 2-Step Verification on your Google account
2. Go to myaccount.google.com/apppasswords
3. Generate an app password for "The Designer's Seed"
4. Add to Vercel environment variables

### 5. Optional: Add the PDF

1. Put `creative-brief-complete.pdf` in the `public/` folder
2. Push to GitHub — Vercel auto-deploys

---

## Project Structure

```
the-designers-seed/
├── app/
│   ├── globals.css          ← Styles, brand colors, accessibility
│   ├── layout.js            ← Page wrapper
│   ├── page.js              ← Main app (all screens + flow logic)
│   └── api/submit/route.js  ← Backend: saves to Sheets + sends email
├── components/
│   └── FormFields.js        ← Reusable form components
├── lib/
│   └── formData.js          ← All form questions & sections
├── public/
│   └── creative-brief-complete.pdf  ← Optional PDF download
├── .env.example
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Customization

Edit these files to customize:

- **`lib/formData.js`** — Form questions, sections, field types
- **`app/page.js`** — Screen layouts, branding text, color scheme
- **`components/FormFields.js`** — Individual field component styles
- **`app/api/submit/route.js`** — Email templates, sheet formatting

---

## Troubleshooting

**Submissions aren't showing in Google Sheets:**
- Make sure you shared the sheet with the service account email
- Make sure the Google Sheets API is enabled in GCP
- Check that `GOOGLE_PRIVATE_KEY` doesn't have extra quotes/escaping

**Not getting email notifications:**
- Make sure 2-Step Verification is ON for Gmail
- Use an App Password, not your regular Gmail password
- Check your spam folder

**Blank page on load:**
- Vercel → Deployments → latest → Build Logs for errors

---

## License

Free to use and modify for your own client intake process.
