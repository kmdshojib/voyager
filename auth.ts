import { connectDb } from "@/db/dbConfig";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import User from './src/model/user.model';
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET, // Use AUTH_SECRET instead of AUTH_GOOGLE_SECRET
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async signIn({ user, account, profile }) {
      await connectDb(); // Ensure DB is connected

      try {
        // Check if the user already exists in the database
        const dbUser = await User.findOne({ email: user.email });

        if (!dbUser) {
          await User.create({
            name: user.name,
            email: user.email,
            avatar: user.image,
            socialAuthentication: true,
          });
        }

        return true; 
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // Return false to deny sign-in
      }
    },
  },
})