import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.EXPO_PUBLIC_DATABASE_URL) {
  throw new Error("EXPO_PUBLIC_DATABASE_URL is not defined");
}

const sql = neon(process.env.EXPO_PUBLIC_DATABASE_URL);
const db = drizzle(sql, { schema });

export default db;
