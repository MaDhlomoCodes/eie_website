import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, subject, message } = body;

    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // In production, integrate an email service here (e.g. Resend, SendGrid, Nodemailer)
    // For now, simulate a successful send
    console.log('Contact form submission:', { name, subject, message });

    return NextResponse.json(
      { success: true, message: 'Message received. We will be in touch shortly.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
