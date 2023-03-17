import { Router } from "express";
import {
  getAllCampaignsRoute,
  getCampaignByIdRoute,
} from "./campagins.controller";

const campaignsRouter = Router();

campaignsRouter
  .get("/", getAllCampaignsRoute)
  .get("/:campaignId", getCampaignByIdRoute)

export default campaignsRouter;
