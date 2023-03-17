import { connection } from "../database/connection";

const getAllActiveCampaignsService = () => {
  return connection.query(
    {
      sql: `
        SELECT * FROM Campaigns
            WHERE status = 'active'
        `,
    },
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );
};
const getCampaignByIdService = (campaignId: string) => {
  return connection.query({
    sql: `CALL get_campaign_by_id(?)`,
    values: [campaignId],
  });
};

export { getAllActiveCampaignsService, getCampaignByIdService };
