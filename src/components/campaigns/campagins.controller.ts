import { Request, Response } from "express";
import {
  getAllActiveCampaignsService,
  getCampaignByIdService,
} from "./campaigns.service";
import { connection } from "../database/connection";

const getAllCampaignsRoute = async (req: Request, res: Response) => {
  await connection.execute(
    getAllActiveCampaignsService().sql,
    (err, result) => {
      res.send(result);
    }
  );
};

const getCampaignByIdRoute = async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  await connection.execute(
    getCampaignByIdService(campaignId).sql,
    (err, result) => {
      const [data] = result;
      res.send(data);
    }
  );
};

export { getAllCampaignsRoute, getCampaignByIdRoute };
