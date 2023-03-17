"use strict";
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
exports.getCampaignByIdRoute = exports.getAllCampaignsRoute = void 0;
const campaigns_service_1 = require("./campaigns.service");
const connection_1 = require("../database/connection");
const getAllCampaignsRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.execute((0, campaigns_service_1.getAllActiveCampaignsService)().sql, (err, result) => {
        res.send(result);
    });
});
exports.getAllCampaignsRoute = getAllCampaignsRoute;
const getCampaignByIdRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { campaignId } = req.params;
    yield connection_1.connection.execute((0, campaigns_service_1.getCampaignByIdService)(campaignId).sql, (err, result) => {
        const [data] = result;
        res.send(data);
    });
});
exports.getCampaignByIdRoute = getCampaignByIdRoute;
