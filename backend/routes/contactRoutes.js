const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

// Initialize nodemailer transporter if credentials exist
const createTransporter = () => {
  const user = process.env.EMAIL_USER || process.env.GMAIL_USER;
  const pass = process.env.EMAIL_PASS || process.env.GMAIL_PASS || process.env.EMAIL_PASSWORD;

  if (user && pass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }
  return null;
};

// POST /api/contact
router.post('/', async (req, res) => {
  console.log('Received Contact Form Submission:', req.body);
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || 'pritiyadavit25@gmail.com';

  // 1. Try to send real email via Nodemailer if SMTP configured
  let emailSent = false;
  try {
    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `"${name} (Portfolio Inquiry)" <${process.env.EMAIL_USER || process.env.GMAIL_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: subject ? `[Portfolio Inquiry] ${subject} - from ${name}` : `[Portfolio Inquiry] New Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #0284c7; margin-top: 0;">New Portfolio Message for Priti Yadav</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Subject / Topic:</strong> ${subject}</p>` : ''}
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            <p style="margin-top: 25px; font-size: 12px; color: #64748b;">
              Received via Priti Yadav Developer Portfolio on ${new Date().toLocaleString()}
            </p>
          </div>
        `
      });
      emailSent = true;
      console.log(`Email successfully forwarded to ${recipientEmail}`);
    } else {
      console.log(`SMTP credentials not configured in backend .env. (Email logged locally for ${recipientEmail})`);
    }
  } catch (mailErr) {
    console.error('Nodemailer transmission notice:', mailErr.message);
  }

  // 2. Try to save to MongoDB if connected
  try {
    const newContact = new Contact({ name, email, message, subject });
    await newContact.save();
    return res.status(201).json({
      success: true,
      message: emailSent 
        ? `Thank you! Your message has been sent directly to ${recipientEmail} and logged.`
        : 'Thank you! Your message has been received.',
      emailSent
    });
  } catch (error) {
    console.log('MongoDB save notice, logging submission:', { name, email, subject, message, time: new Date() });
    return res.status(200).json({
      success: true,
      message: emailSent 
        ? `Thank you! Your email was sent to ${recipientEmail}.`
        : 'Thank you! Your message has been logged.',
      emailSent,
      offlineMode: true
    });
  }
});

module.exports = router;