"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donations_controller_1 = require("./donations.controller");
const donationsRouter = (0, express_1.Router)();
donationsRouter
    .post("/create", donations_controller_1.createNewDonationRoute)
    .post("/mark-as-fraud", donations_controller_1.markDonatorAsFraudRoute);
exports.default = donationsRouter;
