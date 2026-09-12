import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, outlet, service, date, timeSlot, message, offer } = body;

    // Validate required fields
    if (!name || !phone || !outlet || !service || !date || !timeSlot) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build email body
    const emailBody = `
New Appointment Request — Venus Makeover
==========================================

Name:         ${name}
Phone:        ${phone}
Outlet:       ${outlet}
Service:      ${service}
Date:         ${date}
Time Slot:    ${timeSlot}
${offer ? `Offer:        ${offer}` : ""}
${message ? `Notes:        ${message}` : ""}

Received at:  ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
==========================================
Please call ${name} within 2 hours to confirm.
    `.trim();

    // Send via Resend (uncomment and add RESEND_API_KEY to .env.local)
    /*
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:    "booking@venusmakeover.in",
      to:      ["bookings@venusmakeover.in"],
      subject: `New Booking — ${name} · ${service} · ${outlet}`,
      text:    emailBody,
    });
    */

    // For now, log the enquiry (remove in production, replace with Resend above)
    console.log("📋 New booking enquiry:\n", emailBody);

    // Respond with success
    return NextResponse.json({ success: true, message: "Booking received" }, { status: 200 });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
