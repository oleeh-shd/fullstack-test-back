import { EnvType, load } from "ts-dotenv";

export type Env = EnvType<typeof schema>;

export const schema = {
    DB_HOST: String,
    DB_USER: String,
    DB_PASSWORD: String,
    DB_NAME: String,
};

export let env: Env;

export function loadEnv(): void {
    env = load(schema);
}
