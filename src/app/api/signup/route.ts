import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import UserData from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, username, password } = await req.json();
    if (!email || !username || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    await connectDB();
    const existingUser = await UserData.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserData({
      email,
      username,
      password: hashPassword
    });
    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Signup API error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}