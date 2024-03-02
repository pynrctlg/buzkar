import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer"

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASSWORD || "password",
    },
}

export const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions,
    })

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        ...data,
    })
}

export async function POST(req) {
    const { body } = await req.json();
    const msg = JSON.stringify(body);
    console.log(process.env.SMTP_FROM_EMAIL);
    let senData = {
        to: "bircantanoba@gmail.com",
        subject: "Welcome to NextAPI",
        html: msg,
    };

    await sendEmail(senData);

    return NextResponse.json({ message: msg }, { status: 200 })
}