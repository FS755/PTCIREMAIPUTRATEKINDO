import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json()

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "Semua field wajib diisi" },
                { status: 400 }
            )
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: `
Nama: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
        })

        return NextResponse.json({ message: "Email berhasil dikirim" })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { message: "Gagal mengirim email" },
            { status: 500 }
        )
    }
}