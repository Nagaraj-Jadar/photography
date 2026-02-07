# Email Notifications Setup Guide

Your contact form is now configured to send email notifications to **nagarajbjadar@gmail.com** whenever someone submits an inquiry!

## Quick Setup (5 minutes):

### Step 1: Create EmailJS Account

1. Go to: https://www.emailjs.com/
2. Click **"Sign Up Free"**
3. Sign up using your Google account (nagarajbjadar@gmail.com) or email
4. Verify your email

### Step 2: Add Email Service

1. After login, go to **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **"Gmail"** 
4. Click **"Connect Account"**
5. Sign in with **nagarajbjadar@gmail.com**
6. Copy the **Service ID** (it will look like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. **Template Name:** `Contact Form Inquiry`
4. **Template ID:** Change it to `template_contact`
5. **Email Template Content:**

```
Subject: New Wedding Inquiry from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Wedding Date: {{wedding_date}}

Message:
{{message}}

---
This inquiry was submitted via your photography website contact form.
```

6. **From Name:** `Photography Website`
7. **To Email:** `{{to_email}}` (leave as is - this is already set to your email)
8. Click **"Save"**

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the left menu
2. Find **"Public Key"** 
3. Copy it (looks like: `I-zBMFIl3XwyGQo7x`)

### Step 5: Update Your Code (Already Done!)

The code is already set up with the following values:
- Service ID: `service_4xp0nzp`
- Template ID: `template_contact`  
- Public Key: `I-zBMFIl3XwyGQo7x`

**If your IDs are different**, update them in: `src/components/Contact.tsx`

### Step 6: Test It!

1. Go to your website: http://localhost:3000
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check **nagarajbjadar@gmail.com** inbox for the email!

---

## ✅ What Happens Now:

When someone fills the contact form:
1. ✉️ You get an instant email to **nagarajbjadar@gmail.com**
2. 💾 Data is saved to Supabase database
3. 📧 The email includes all their details (name, email, phone, wedding date, message)

## 📊 EmailJS Free Tier:

- ✅ 200 emails/month FREE
- ✅ No credit card required
- ✅ Perfect for a photography business starting out

## 🔧 Troubleshooting:

**Not receiving emails?**
1. Check spam/junk folder
2. Verify Service ID, Template ID, and Public Key match in EmailJS dashboard
3. Make sure template ID is exactly `template_contact`
4. Check browser console (F12) for errors

**Want to customize the email?**
1. Go to EmailJS → Email Templates
2. Edit the `template_contact` template
3. Customize subject, content, styling

---

## Alternative: Check Supabase Directly

If you prefer not to set up email notifications right now, you can still view all inquiries in Supabase:

**Quick Link to Contact Messages:**
https://supabase.com/dashboard/project/dekvrsnadtlqmjjeejtk/editor/28539

Bookmark this link for easy access!
