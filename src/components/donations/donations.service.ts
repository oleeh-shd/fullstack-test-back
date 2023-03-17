import { connection } from "../database/connection";

const createDonationService = (
  amonut: number,
  nickname: string,
  campaignId: number
) => {
  return connection.query({
    sql: `INSERT INTO Donations VALUES (DEFAULT, ?, ?, DEFAULT, ?)`,
    values: [amonut, nickname, campaignId],
  });
};

const markDonatorAsFraudService = (
    donatorNickname: string
) => {
  return connection.query({
    sql: `CALL mark_donator_as_fraud(?)`,
    values: [donatorNickname]
  })
}

export {
  createDonationService,
    markDonatorAsFraudService
}
