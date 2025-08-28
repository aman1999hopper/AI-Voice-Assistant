import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Example: Save to DB or send email
    console.log("📩 New Contact Message:", { name, email, message });

    // TODO: You can integrate Nodemailer, Resend, or DB insert here
    // await db.insert({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
