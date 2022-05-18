import Router from "next/router";
import { useSession } from "next-auth/react";

export default function useUser() {
  const { data: session, status } = useSession();

  if (typeof window == "undefined" || status === "loading") {
    return null;
  }
  console.log(`path is ${Router.pathname}`);
  if (!session && status === "unauthenticated") {
    if (Router.pathname == "/login") {
      return null;
    } else {
      Router.push("/login");
    }
  }
  return session;
}
