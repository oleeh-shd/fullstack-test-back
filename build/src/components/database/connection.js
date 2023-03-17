"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = require("mysql2");
const env_1 = require("../env/env");
(0, env_1.loadEnv)();
const connectionOptions = {
    host: env_1.env.DB_HOST,
    user: env_1.env.DB_USER,
    password: env_1.env.DB_USER,
    database: env_1.env.DB_NAME,
};
exports.connection = (0, mysql2_1.createConnection)(connectionOptions);
