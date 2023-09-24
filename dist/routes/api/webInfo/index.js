"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
const webInfoRouter = express_1.default.Router();
let jsonParser = body_parser_1.default.json();
webInfoRouter.get('/webInfo', (req, res) => {
    (0, db_1.findWebInfo)()
        .then((data) => {
        console.log('✅ ~ res更新成功:', data);
        res.json(data);
    })
        .catch((err) => {
        console.log('✅ ~ err更新失败:', err);
    });
});
webInfoRouter.post('/webInfo', jsonParser, (req, res) => {
    //获取请求体数据
    console.log('✅ ~ req.body:', req.body);
    const { type, social, roles, motto } = req.body;
    (0, db_1.updateWebInfo)({
        type,
        roles,
        motto,
        social,
    })
        .then((res) => {
        console.log('✅ ~ res:', res);
    })
        .catch((err) => {
        console.log('✅ ~ err:', err);
    });
    res.json({ name: '获取请求体数据' });
});
exports.default = webInfoRouter;
