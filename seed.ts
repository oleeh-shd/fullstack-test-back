import { connection } from "./src/components/database/connection";
import * as crypto from "crypto";
import { createCampaignTable } from "./src/components/database/entities/campaign.entity";
import { createDonationsTable } from "./src/components/database/entities/donation.entity";
import { getCampaignByIdProcedure } from "./src/components/database/procedures/campaigns/get-campaign-by-id.procedure";
import { markDonatorAsFraudProcedure } from "./src/components/database/procedures/donations/mark-donator-as-fraud.procedure";

const dbQueries = [
    createCampaignTable.sql,
    createDonationsTable.sql,
    getCampaignByIdProcedure.sql,
    markDonatorAsFraudProcedure.sql,
  ];

const companies = [
  {
    id: crypto.randomUUID(),
    name: "Comp1",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp2",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp3",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp4",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp5",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp6",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp7",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp8",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp9",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp10",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp11",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp12",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp13",
    description: "description",
    goal_amount: 12500,
  },
];

const seed = async () => {
    console.log("Setting up tables...");
    await Promise.all(dbQueries.map((sql) => new Promise(resolve => connection.execute(sql, resolve))));
    console.log("Done! Proceed to seeding...")
  
    console.log("Start seeding...");
    companies.forEach((entity) => {
      const { id, name, description, goal_amount } = entity;
      console.log(`Inserting entity with id ${id}`);
      connection.query({
        sql: `INSERT INTO Campaigns VALUES (?, ?, ?, ?, DEFAULT)`,
        values: [id, name, description, goal_amount],
      });
      console.log(`Finished inserting entity\n`);
    });
    console.log("Seeding done!");
  };

seed()
