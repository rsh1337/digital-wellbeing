import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "contact@rares-andrei.me" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        const signinUser = async ({ password, user }) => {
          if (!user.password) {
            throw new Error("Scrie o parola");
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new Error("Parola incorecta.");
          }
          return user;
        };
        if (!user) {
          throw new Error("Acest cont nu este inregistrat.");
        }
        if (user) return signinUser({ password, user });
      },
    }),
  ],
});