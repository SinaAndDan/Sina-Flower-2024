// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { addUser, findUserByEmail } from "@/user/user";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check if the user already exists
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // Add the new user to the dummy data
  const newUser = await addUser(email, password);

  return NextResponse.json({
    message: "User created successfully",
    user: newUser,
  });
}
