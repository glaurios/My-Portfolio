import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = "adrienglaurios@gmail.com";

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = clean(body.name, 100);
    const email = clean(body.email, 160);
    const message = clean(body.message, 5000);
    const honeypot = clean(body.website, 100);

    // Quietly reject obvious bot submissions.
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || name.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your name.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a little more about your message.",
        },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 32px;
              background: #f8fafc;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 0 auto;
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 18px;
                padding: 32px;
              "
            >
              <h1
                style="
                  margin: 0 0 24px;
                  font-size: 24px;
                  color: #0f172a;
                "
              >
                New portfolio message
              </h1>

              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />
                ${safeEmail}
              </p>

              <p>
                <strong>Message:</strong><br />
                ${safeMessage}
              </p>

              <hr
                style="
                  margin: 28px 0;
                  border: 0;
                  border-top: 1px solid #e2e8f0;
                "
              />

              <p
                style="
                  margin: 0;
                  font-size: 13px;
                  color: #64748b;
                "
              >
                Sent from the Tyndale Anane Antwi portfolio contact form.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New portfolio message

Name: ${name}
Email: ${email}

Message:
${message}

Sent from the Tyndale Anane Antwi portfolio contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "I couldn't send your message right now. Please try again or email me directly.",
        },
        { status: 502 },
      );
    }

    console.log("Email sent successfully:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. Your message has been sent successfully. I’ll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 },
    );
  }
}