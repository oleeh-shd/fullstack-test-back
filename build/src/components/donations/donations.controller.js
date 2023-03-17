"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDonatorAsFraudRoute = exports.createNewDonationRoute = void 0;
const connection_1 = require("../database/connection");
const donations_service_1 = require("./donations.service");
const createNewDonationRoute = (req, res) => {
    const { amount, nickname, campaignId } = req.body;
    return connection_1.connection.execute((0, donations_service_1.createDonationService)(amount, nickname, campaignId).sql, (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
};
exports.createNewDonationRoute = createNewDonationRoute;
const markDonatorAsFraudRoute = (req, res) => {
    const { donatorNickname } = req.body;
    return connection_1.connection.execute((0, donations_service_1.markDonatorAsFraudService)(donatorNickname).sql, (err) => {
        if (err)
            throw err;
        res.send({ message: "User reported" });
    });
};
exports.markDonatorAsFraudRoute = markDonatorAsFraudRoute;
