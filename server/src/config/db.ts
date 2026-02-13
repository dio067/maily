import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Connected To Database");
});

pool.on("error", () => {
  console.error("Could not Connect to Database");
});

export default pool;
