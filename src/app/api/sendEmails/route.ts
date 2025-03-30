import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - ${body.option || "No Subject"}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || "N/A"}\nMessage:\n${body.message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
