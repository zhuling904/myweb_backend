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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
const update_1 = require("./business/update");
const likes_1 = require("./business/likes");
const roles_1 = require("./business/roles");
const social_1 = require("./business/social");
const utils_1 = require("../../../utils");
const webInfoRouter = express_1.default.Router();
let jsonParser = body_parser_1.default.json();
/** 获取网页信息 */
webInfoRouter.get('/webInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const webInfo = yield (0, db_1.getWebInfo)();
    res.json(webInfo);
}));
// 更新网站信息: 可更新任意字段信息
webInfoRouter.post('/webInfo/update', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const updateData = (0, update_1.dealWebInfoUpdateData)(req, res);
    const result = yield (0, db_1.updateWebInfoPartial)(id, updateData);
    (0, utils_1.logHelper)(result, res);
}));
// 更新点赞
webInfoRouter.post('/webInfo/update/likes', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const updateData = (0, likes_1.dealLikeData)(req, res);
    const result = yield (0, db_1.updateLikes)(id, updateData);
    (0, utils_1.logHelper)(result, res);
}));
// 更新访问量
webInfoRouter.post('/webInfo/update/visitors', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const result = yield (0, db_1.updateVisitors)(id);
    (0, utils_1.logHelper)(result, res);
}));
// 增加角色
webInfoRouter.post('/webInfo/roles/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const roleToAdd = (0, roles_1.dealRoleToAdd)(req, res);
    const result = yield (0, db_1.addRoleToWebInfo)(id, roleToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除角色列表
webInfoRouter.post('/webInfo/roles/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const roleToRemove = (0, roles_1.dealRoleToRemove)(req, res);
    const result = yield (0, db_1.removeRoleFromWebInfo)(id, roleToRemove);
    (0, utils_1.logHelper)(result, res);
}));
// 增加社交链接
webInfoRouter.post('/webInfo/social/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const socialToAdd = (0, social_1.dealAddSocial)(req, res);
    const result = yield (0, db_1.addSocialToWebInfo)(id, socialToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除社交链接
webInfoRouter.post('/webInfo/social/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const socialNameToRemove = (0, social_1.dealDelSocial)(req, res);
    const result = yield (0, db_1.removeSocialFromWebInfo)(id, socialNameToRemove);
    (0, utils_1.logHelper)(result, res);
}));
exports.default = webInfoRouter;
