import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { useSession } from "next-auth/react";
import useSwr from "swr";
import Router from "next/router";
import useUser from "../hooks/useUser";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserList = () => {
  const { data, error } = useSwr("/api/users", fetcher);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {data &&
          data.map((user) => (
            <li key={user.id}>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                <a>{`${user.name}`}</a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default function Index() {
  const user = useUser();
  if (!user) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Social Experiment
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
