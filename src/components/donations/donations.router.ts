import { Router } from "express";
import {
  createNewDonationRoute,
  markDonatorAsFraudRoute,
} from "./donations.controller";

const donationsRouter = Router();

donationsRouter
  .post("/create", createNewDonationRoute)
  .post("/mark-as-fraud", markDonatorAsFraudRoute);

export default donationsRouter;
