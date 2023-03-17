
export const getCampaignByIdProcedure = {
  sql: `
    CREATE PROCEDURE IF NOT EXISTS get_campaign_by_id ( IN campaignId VARCHAR (255) )
    BEGIN
        SELECT *
        FROM Campaigns
        WHERE id = campaignId;
    END

    `,
};
