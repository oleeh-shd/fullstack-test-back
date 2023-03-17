import express         from "express";
import campaignsRouter from "./components/campaigns/campaigns.router";
import donationsRouter from "./components/donations/donations.router";
import cors from 'cors';

export const initializeServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json())
  app.use("/campaigns", campaignsRouter);
  app.use("/donations", donationsRouter)
  return app;
};
