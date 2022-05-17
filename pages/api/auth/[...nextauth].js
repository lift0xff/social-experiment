import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import sql from "../../../lib/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log(`BWB b4 credentials`);
        const { username, password } = credentials;
        console.log(`BWB starting sql query`);
        const [user] = await sql`select * from users where name=${username}`;

        if (user && user.password == password) {
          console.log(`BWB user found!`);
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          console.log(`BWB user not found!`);
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
});
