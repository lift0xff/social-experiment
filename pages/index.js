import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/accessDenied";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserList = () => {
  const { data, error } = useSwr("/api/users", fetcher);

  return (
    <ul>
      {data &&
        data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
              <a>{`User ${user.name}`}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default function Index() {
  const { data: session, status } = useSession();

  if (typeof window == "undefined" || status === "loading") {
    return null;
  }

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <UserList />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
