"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeServer = void 0;
const express_1 = __importDefault(require("express"));
const campaigns_router_1 = __importDefault(require("./components/campaigns/campaigns.router"));
const donations_router_1 = __importDefault(require("./components/donations/donations.router"));
const cors_1 = __importDefault(require("cors"));
const initializeServer = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/campaigns", campaigns_router_1.default);
    app.use("/donations", donations_router_1.default);
    return app;
};
exports.initializeServer = initializeServer;
