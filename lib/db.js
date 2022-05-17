import dotenv from "dotenv";
dotenv.config();

const postgres = require("postgres");
const sql = postgres(process.env.PG_URI, {
  ssl: {
    rejectUnauthorized: false,
  },
});

export default sql;
