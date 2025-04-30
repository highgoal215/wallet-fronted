import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { UserData } from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Ensure MongoDB is connected
    try {
      await connectDB();
    } catch (error) {
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 500 }
      );
    }

    // Verify UserData model is available
    if (!UserData) {
      return NextResponse.json(
        { message: "Database model not initialized" },
        { status: 500 }
      );
    }

    const existingUser = await UserData.findOne({ email });

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
    return NextResponse.json(
      { message: "Server error", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
