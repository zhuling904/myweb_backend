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
(0, db_1.dbConnect)()
    .then((res) => {
    // 允许所有域的跨域请求
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    // 使用首页路由模块
    app.use('/api', routes_1.API.webInfo);
    // 作品页面路由模块
    app.use('/api', routes_1.API.works);
    // 关于我页面路由模块
    app.use('/api', routes_1.API.about);
})
    .catch((err) => {
    throw new Error('发生错误');
});
app.listen(3001, function () {
    // 监听端口
    console.log('server listening on 3001');
});
