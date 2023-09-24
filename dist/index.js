"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const routes_1 = require("./routes");
/** ==================路由模块======================= */
const app = (0, express_1.default)();
(0, db_1.dbConnect)().then(res => {
    console.log("✅ ~ 数据库连接成功:");
    app.use('/api', routes_1.API.webInfo);
})
    .catch(err => {
    throw new Error('发生错误');
});
app.listen(3001, function () {
    console.log("server listening on 3001");
});
