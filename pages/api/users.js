import sql from "../../lib/db";

export default function handler(req, res) {
  sql`select name from users`.then((users) => {
    res.status(200).json(users);
  });
}
