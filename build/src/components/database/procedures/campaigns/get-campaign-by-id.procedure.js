"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaignByIdProcedure = void 0;
exports.getCampaignByIdProcedure = {
    sql: `
    CREATE PROCEDURE IF NOT EXISTS get_campaign_by_id ( IN campaignId VARCHAR (255) )
    BEGIN
        SELECT *
        FROM Campaigns
        WHERE id = campaignId;
    END

    `,
};
