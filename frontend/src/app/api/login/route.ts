import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@example.com" && password === "123456") {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
