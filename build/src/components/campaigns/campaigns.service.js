"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaignByIdService = exports.getAllActiveCampaignsService = void 0;
const connection_1 = require("../database/connection");
const getAllActiveCampaignsService = () => {
    return connection_1.connection.query({
        sql: `
        SELECT * FROM Campaigns
            WHERE status = 'active'
        `,
    }, (err, result) => {
        if (err)
            throw err;
        return result;
    });
};
exports.getAllActiveCampaignsService = getAllActiveCampaignsService;
const getCampaignByIdService = (campaignId) => {
    return connection_1.connection.query({
        sql: `CALL get_campaign_by_id(?)`,
        values: [campaignId],
    });
};
exports.getCampaignByIdService = getCampaignByIdService;
