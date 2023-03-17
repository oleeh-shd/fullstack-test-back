import { Request, Response } from "express";
import { connection } from "../database/connection";
import {
  createDonationService,
  markDonatorAsFraudService,
} from "./donations.service";

const createNewDonationRoute = (req: Request, res: Response) => {
  const { amount, nickname, campaignId } = req.body;
  return connection.execute(
    createDonationService(amount, nickname, campaignId).sql,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

const markDonatorAsFraudRoute = (req: Request, res: Response) => {
  const { donatorNickname } = req.body;
  return connection.execute(
    markDonatorAsFraudService(donatorNickname).sql,
    (err) => {
      if (err) throw err;
      res.send({ message: "User reported" });
    }
  );
};

export { createNewDonationRoute, markDonatorAsFraudRoute };
