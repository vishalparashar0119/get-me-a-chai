import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import { User } from "@/app/database/models/User";
import connectDatabase from "@/app/database/connectDatabase";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        connectDatabase().then(()=>{
          console.log("data base is connected");
        });
        const currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            userName: user.email.split("@")[0],
          });

          await newUser.save();
          user.name = newUser.userName;
        }

        user.name = currentUser.userName;
        return true
      }

      return false
     
    }
  }
}

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }