const dotenv = require("dotenv");
dotenv.config();
const child_process = require("child_process");

child_process.execSync(
  `psql -h ${process.env.PG_HOST} -p ${process.env.PG_PORT} -U ${process.env.PG_USER} ${process.env.PG_DB}`
);
