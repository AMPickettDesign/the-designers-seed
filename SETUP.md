# Setup Guide — Project Brief App

Everything here is **free**. No credit card needed for any step.

---

## Step 1: Get the Code on GitHub

You need a GitHub account to deploy on Vercel.

1. Go to [github.com](https://github.com) and sign up (or log in)
2. Click the **+** in the top right → **New repository**
3. Name it `project-brief` → set it to **Private** → click **Create repository**
4. Upload all the files from this project folder into the repo
   - You can drag and drop the entire folder contents into the GitHub page
   - Or use GitHub Desktop (easier): [desktop.github.com](https://desktop.github.com)

---

## Step 2: Set Up Google Sheets

This is where client submissions land.

### Create the Sheet
1. Go to [sheets.google.com](https://sheets.google.com) → create a new blank spreadsheet
2. Name it **"Project Brief Submissions"**
3. Copy the **Sheet ID** from the URL — it's the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/THIS_PART_IS_YOUR_SHEET_ID/edit
   ```
4. Save this ID — you'll need it in Step 4

### Create a Service Account (this lets the app write to your sheet)
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click **Select a project** → **New Project** → name it `project-brief` → **Create**
3. Wait for it to create, then make sure it's selected
4. In the search bar at the top, search for **"Google Sheets API"** → click it → **Enable**
5. Now go to **APIs & Services** → **Credentials** (left sidebar)
6. Click **+ Create Credentials** → **Service Account**
7. Name it `brief-writer` → click **Create and Continue**
8. For role, select **Editor** → **Continue** → **Done**
9. Click on the service account you just created (the email link)
10. Go to **Keys** tab → **Add Key** → **Create new key** → **JSON** → **Create**
11. A JSON file downloads — open it in a text editor
12. You need two values from this file:
    - `client_email` (looks like `brief-writer@project-brief-xxxxx.iam.gserviceaccount.com`)
    - `private_key` (the long string starting with `-----BEGIN PRIVATE KEY-----`)

### Share the Sheet with the Service Account
1. Go back to your Google Sheet
2. Click **Share** → paste the `client_email` from above
3. Give it **Editor** access → **Send**

---

## Step 3: Set Up Email Notifications (Gmail)

This sends you an email every time someone submits a brief.

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Make sure **2-Step Verification** is turned ON (required)
3. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Select app: **Mail**, device: **Other** → type `Project Brief` → **Generate**
5. Copy the 16-character password it gives you — save it, you'll need it in Step 4
6. **Important**: This is NOT your Gmail password. It's a special app-only password.

---

## Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Sign Up** with your GitHub account
2. Click **Add New** → **Project**
3. Find your `project-brief` repo → click **Import**
4. Before deploying, expand **Environment Variables** and add these:

| Name | Value |
|------|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The `client_email` from your JSON key file |
| `GOOGLE_PRIVATE_KEY` | The `private_key` from your JSON key file (entire thing including BEGIN/END lines) |
| `GOOGLE_SHEET_ID` | The Sheet ID from Step 2 |
| `SMTP_EMAIL` | Your Gmail address |
| `SMTP_PASSWORD` | The 16-character app password from Step 3 |
| `NOTIFY_EMAIL` | Where you want to receive notifications (can be the same Gmail) |

5. Click **Deploy**
6. Wait 1–2 minutes — Vercel gives you a URL like `project-brief-xxxxx.vercel.app`
7. **That's your live site.** Share it with clients.

---

## Step 5: Custom Domain (Optional, Free)

If you want it at something like `brief.ampickettdesign.com`:

1. In Vercel, go to your project → **Settings** → **Domains**
2. Type your domain → **Add**
3. Vercel tells you what DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add those records
5. Wait a few minutes — it'll work automatically

---

## Step 6: Add the PDF Download (Optional)

If you want the "Download PDF" option to work for the designer path:

1. Take the `creative-brief-complete.pdf` file
2. Put it in the `public/` folder of your project
3. Push to GitHub — Vercel auto-deploys

---

## How It Works Once It's Live

**Client visits your link →**
1. Picks "I'm a Client"
2. Chooses Version A (has a vision) or Version B (needs help)
3. Version A gets asked: deep dive first, or brief first?
4. Fills out their chosen brief
5. Then fills out the detailed project guide (Version C)
6. Clicks Submit
7. Data goes to your Google Sheet + you get an email

**You visit your link →**
1. Pick "I'm the Designer"
2. Fill in online or download the PDF
3. Online version saves to a "Private Metadata" tab in the same sheet

---

## Troubleshooting

**Submissions aren't showing up in Google Sheets:**
- Make sure you shared the sheet with the service account email
- Make sure the Google Sheets API is enabled in your Cloud Console
- Check that the `GOOGLE_PRIVATE_KEY` in Vercel doesn't have extra quotes or escaping

**Not getting email notifications:**
- Make sure 2-Step Verification is on for your Gmail
- Make sure you used an App Password, not your regular Gmail password
- Check your spam folder

**Site shows a blank page:**
- Go to Vercel → your project → **Deployments** → click the latest one → check **Build Logs** for errors

**Need to update something:**
- Edit files in GitHub → Vercel auto-deploys within ~60 seconds

---

## Files in This Project

```
project-brief/
├── app/
│   ├── globals.css          ← Styles, brand colors, accessibility
│   ├── layout.js            ← Page wrapper
│   ├── page.js              ← Main app (all screens + flow logic)
│   └── api/submit/route.js  ← Backend: saves to Sheets + sends email
├── components/
│   └── FormFields.js        ← Reusable form components
├── lib/
│   └── formData.js          ← All form questions & sections
├── public/                  ← Put your PDF here for download
├── .env.example             ← Template for environment variables
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```
