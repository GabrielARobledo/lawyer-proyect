import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { buildContactEmailBody, EMAIL } from "@/lib/email";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBody = buildContactEmailBody(name, email, message);

    await transporter.sendMail({
      from: EMAIL.from,
      to: EMAIL.to,
      subject: `Nueva consulta de ${name}`,
      text: `${name} (${email}) dice:\n\n${message}\n\nEnviado el: ${new Date().toLocaleString()}`,
      html: emailBody,
    });

    return NextResponse.json({ message: "Email enviado correctamente" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error al enviar email" }, { status: 500 });
  }
}