import { createConnection } from "mysql2";
import { env, loadEnv } from "../env/env";
loadEnv();

const connectionOptions = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_USER,
  database: env.DB_NAME,
};
export const connection = createConnection(connectionOptions);
