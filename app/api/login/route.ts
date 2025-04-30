import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import UserData from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    const existingUser = await UserData.UserData.findOne({ email });

    if (!existingUser) {
      return NextResponse.json(
        { message: "Invalid user, please Sign Up" },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Password incorrect" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login Successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("SignIn API error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
