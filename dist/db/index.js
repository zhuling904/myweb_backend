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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
//2. 导入 mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const dbUrl = `mongodb://root:zhuling@${config_1.DB_CONFIG.DB_HOST}:${config_1.DB_CONFIG.DB_PORT}/${config_1.DB_CONFIG.DB_NAME}?authSource=admin`;
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('✅ ~ dbUrl:', dbUrl);
        //3. 连接数据库
        mongoose_1.default.set('strictQuery', true);
        const db = yield mongoose_1.default.connect(dbUrl);
        return db;
    });
}
exports.dbConnect = dbConnect;
