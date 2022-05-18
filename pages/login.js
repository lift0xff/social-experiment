import * as React from "react";
import { signIn } from "next-auth/react";
import useUser from "../hooks/useUser";
import Router from "next/router";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1>Please login</h1>
      <p>
        <Link
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn(undefined, { callbackUrl: "/" });
          }}
        >
          You must sign in
        </Link>
      </p>
    </>
  );
}
