"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./src/components/database/connection");
const crypto = __importStar(require("crypto"));
const campaign_entity_1 = require("./src/components/database/entities/campaign.entity");
const donation_entity_1 = require("./src/components/database/entities/donation.entity");
const get_campaign_by_id_procedure_1 = require("./src/components/database/procedures/campaigns/get-campaign-by-id.procedure");
const mark_donator_as_fraud_procedure_1 = require("./src/components/database/procedures/donations/mark-donator-as-fraud.procedure");
const dbQueries = [
    campaign_entity_1.createCampaignTable.sql,
    donation_entity_1.createDonationsTable.sql,
    get_campaign_by_id_procedure_1.getCampaignByIdProcedure.sql,
    mark_donator_as_fraud_procedure_1.markDonatorAsFraudProcedure.sql,
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
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Setting up tables...");
    yield Promise.all(dbQueries.map((sql) => new Promise(resolve => connection_1.connection.execute(sql, resolve))));
    console.log("Done! Proceed to seeding...");
    console.log("Start seeding...");
    companies.forEach((entity) => {
        const { id, name, description, goal_amount } = entity;
        console.log(`Inserting entity with id ${id}`);
        connection_1.connection.query({
            sql: `INSERT INTO Campaigns VALUES (?, ?, ?, ?, DEFAULT)`,
            values: [id, name, description, goal_amount],
        });
        console.log(`Finished inserting entity\n`);
    });
    console.log("Seeding done!");
});
seed();
