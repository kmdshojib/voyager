import { connectDb } from "@/db/dbConfig";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User from './src/model/user.model';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async signIn({ user, account, profile}) {
      // Ensure DB is connected

      try {
        // Check if the user already exists in the database
        let dbUser = await User.findOne({ email: user.email });
        if (!dbUser) {
          dbUser = await User.create({
            name: user.name,
            email: user.email,
            avatar: user.image,
            socialAuthentication: true,
          });

        }
        console.log(dbUser); // Log a success message
        return true; // Allow the sign-in
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // Reject the sign-in if there's an error
      }
    },
  },
});
