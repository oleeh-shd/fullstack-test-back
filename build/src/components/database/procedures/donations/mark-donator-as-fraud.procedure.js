"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDonatorAsFraudProcedure = void 0;
exports.markDonatorAsFraudProcedure = {
    sql: `
    CREATE PROCEDURE IF NOT EXISTS mark_donator_as_fraud(IN donator_nickname VARCHAR(255))
  BEGIN
    WITH found_fraud_donations AS 
      (SELECT * FROM Donations
        LEFT JOIN Campaigns C on C.id = Donations.campaign_id
      WHERE nickname = donator_nickname
      GROUP BY Donations.id, campaign_id, nickname)
    UPDATE Campaigns, Donations
    SET status = 'fraud',
        state  = 'fraud'
    WHERE Campaigns.id = found_fraud_donations.campaign_id
      AND Donations.nickname = found_fraud_donations.nickname;
    END;
    `,
};
