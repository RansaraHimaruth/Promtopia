import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// console.log({
//   GOOGLE_CLIENT_ID: process.env.GOOGLE_ID,
//   GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
  provider: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {

  },
  async siganIn({ profile }) {
    try {
        
    } catch (error) {
        
    }
  },
});

export { handler as GET, handler as POST };
