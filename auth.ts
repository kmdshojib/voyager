import { connectDb } from "@/db/dbConfig";
import User from "@/model/user.model";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // debug: true,
  callbacks: {
    async jwt({ token, user }) {
      // When user signs in, persist their ID in the JWT token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // If the user is signing in, redirect to '/home'
      
      if (url === '/api/auth/') {
        return `${baseUrl}/home`;
      }
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;

      // Default redirect to the baseUrl
      return baseUrl;
    },
    async session({ session, token }) {
      // Add the user ID from the token to the session object
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      try {
        await connectDb(); // Ensure the database is connected
        let dbUser = await User.findOne({ email: user.email });
        if (!dbUser) {
          dbUser = await User.create({
            name: user.name,
            email: user.email,
            avatar: user.image,
            socialAuthentication: true,
          });
        }

        return true; // Allow the sign-in
      } catch (error) {
        console.error("Sign-in error:", error);
        return false; // Reject the sign-in on error
      }
    },
  },
});
