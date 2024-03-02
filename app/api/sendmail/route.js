import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer"
import axios from "axios";

const apiEndpoint = "https://www:@rts.buzkar.keenetic.pro";

const http = axios.create({
    baseURL: apiEndpoint,
})

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "rtsbuzkar@gmail.com",
        pass: process.env.SMTP_PASSWORD || "jkylgmesewkjfhtq",
    },
}

const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions,
    })

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || "rtsbuzkar@gmail.com",
        ...data,
    })
}

export async function GET(req) {

    const res = await http.post('/get-data');
    const data = res.data;

    const msg = JSON.stringify(data);

    let senData = {
        to: "bircantanoba@gmail.com",
        subject: "Buzkar Bilgi",
        html: msg,
    };

    await sendEmail(senData);

    return NextResponse.json({ message: msg }, { status: 200 })
}
// export async function POST(req) {
//     const body = await req.json();

//     const msg = JSON.stringify(body);

//     let senData = {
//         to: "bircantanoba@gmail.com",
//         subject: "Buzkar Bilgi",
//         html: msg,
//     };

//     await sendEmail(senData);

//     return NextResponse.json({ message: msg }, { status: 200 })
// }