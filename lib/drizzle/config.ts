import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({path: './.env.development.local'});
dotenv.config({path: './.env.stage.local'});
dotenv.config({path: './.env.production.local'});

const connectionString = `${process.env.POSTGRES_URL || ""}?sslmode=require`

export default {
  schema: "./lib/drizzle/models/*",
  out: "./lib/drizzle/sql/",
  driver: 'pg',
  dbCredentials: {
    connectionString: connectionString,
  },
  verbose: true,
  strict: true,
} satisfies Config;