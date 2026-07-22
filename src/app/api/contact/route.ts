import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    let transporter;
    
    // If user hasn't configured SMTP credentials yet, use a testing account
    if (!process.env.SMTP_PASS) {
      console.log('No SMTP_PASS found. Using Ethereal test account...');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      // Configure the NodeMailer transport for Gmail
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    }

    // Define the email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'noreply@thunderelectricalsdubai.com'}>`, // Send from authenticated user to avoid spam filters
      to: 'thunderelectricals2000@gmail.com',
      replyTo: `${name} (No Email Provided)`, // Since the form doesn't have an email field yet
      subject: `New Service Request: ${service} from ${name}`,
      text: `
You have received a new service request from your website:

Name: ${name}
Phone: ${phone}
Service Required: ${service}

Message:
${message}
      `,
      html: `
        <h3>New Service Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    if (!process.env.SMTP_PASS) {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send the message. Please try again later.' },
      { status: 500 }
    );
  }
}
