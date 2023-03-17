"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDonationsTable = void 0;
exports.createDonationsTable = {
    sql: `
    CREATE TABLE IF NOT EXISTS Donations
    (
      id          SERIAL PRIMARY KEY UNIQUE NOT NULL,
      amount      INT                       NOT NULL,
      nickname    VARCHAR(255)              NOT NULL,
      state       ENUM('valid', 'fraud')    NOT NULL DEFAULT 'fraud',
      campaign_id VARCHAR(255)              NOT NULL,
      FOREIGN KEY (campaign_id) REFERENCES Campaigns (id)
    )
  `,
};
