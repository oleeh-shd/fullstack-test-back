"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDonatorAsFraudService = exports.createDonationService = void 0;
const connection_1 = require("../database/connection");
const createDonationService = (amonut, nickname, campaignId) => {
    return connection_1.connection.query({
        sql: `INSERT INTO Donations VALUES (DEFAULT, ?, ?, DEFAULT, ?)`,
        values: [amonut, nickname, campaignId],
    });
};
exports.createDonationService = createDonationService;
const markDonatorAsFraudService = (donatorNickname) => {
    return connection_1.connection.query({
        sql: `CALL mark_donator_as_fraud(?)`,
        values: [donatorNickname]
    });
};
exports.markDonatorAsFraudService = markDonatorAsFraudService;
