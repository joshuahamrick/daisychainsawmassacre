import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // TODO: Integrate email provider.
    // Option A — Resend (recommended):
    //   1. npm install resend
    //   2. Add RESEND_API_KEY to .env.local
    //   3. Replace the log below with:
    //      const { Resend } = await import("resend")
    //      const resend = new Resend(process.env.RESEND_API_KEY)
    //      await resend.emails.send({
    //        from: "no-reply@yourdomain.com",
    //        to: "your@email.com",
    //        subject: `[DCM] ${subject} from ${name}`,
    //        text: `From: ${name} <${email}>\n\n${message}`,
    //      })
    //
    // Option B — Formspree (zero backend):
    //   Replace the form action with your Formspree endpoint and remove this route.

    console.log("[Contact Form]", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
