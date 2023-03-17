"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campagins_controller_1 = require("./campagins.controller");
const campaignsRouter = (0, express_1.Router)();
campaignsRouter
    .get("/", campagins_controller_1.getAllCampaignsRoute)
    .get("/:campaignId", campagins_controller_1.getCampaignByIdRoute);
exports.default = campaignsRouter;
