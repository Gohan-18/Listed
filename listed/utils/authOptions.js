import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "user@gmail.com" &&
          credentials?.password === "Hell0W0rld"
        ) {
          return {
            id: 1,
            email: "user@gmail.com",
          };
        }
        return null;
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
],
};
