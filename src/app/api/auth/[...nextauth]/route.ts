// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail } from "@/user/user"; // Import dummy data
import { verifyPassword } from "@/user/auth"; // Password verification logic

export const POST = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Fetch the user from dummy data
        const user = await findUserByEmail(credentials.email);

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Verify the password
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // Return the user object
        return { id: user.id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
  session: {
    strategy: "jwt", // Use JSON Web Tokens for sessions
  },
});
