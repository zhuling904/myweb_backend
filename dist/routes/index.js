"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const webInfo_1 = __importDefault(require("./api/webInfo"));
exports.API = {
    webInfo: webInfo_1.default,
};
