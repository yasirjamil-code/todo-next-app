import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
console.log(
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  })
);
export const Options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};
