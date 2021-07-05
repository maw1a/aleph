import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  database: process.env.DATABASE_URL,
  session: { jwt: true },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
