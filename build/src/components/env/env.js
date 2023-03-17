"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnv = exports.env = exports.schema = void 0;
const ts_dotenv_1 = require("ts-dotenv");
exports.schema = {
    DB_HOST: String,
    DB_USER: String,
    DB_PASSWORD: String,
    DB_NAME: String,
};
function loadEnv() {
    exports.env = (0, ts_dotenv_1.load)(exports.schema);
}
exports.loadEnv = loadEnv;
