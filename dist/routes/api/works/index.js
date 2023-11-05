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
const utils_1 = require("../../../utils");
const db_1 = require("./db");
const update_1 = require("./business/update");
const add_1 = require("./business/add");
const tags_1 = require("./business/tags");
const worksRouter = express_1.default.Router();
let jsonParser = body_parser_1.default.json();
/** 获取作品信息信息 */
worksRouter.get('/works', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const worksList = yield (0, db_1.getAllWorks)();
    res.json(worksList);
}));
/** 更新作品信息: 可更新任意字段信息 */
worksRouter.post('/works/update', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const updateData = (0, update_1.dealWorksUpdateData)(req, res);
    const result = yield (0, db_1.updateWorksPartial)(id, updateData);
    (0, utils_1.logHelper)(result, res);
}));
/** 删除作品信息: 删除指定作品 */
worksRouter.post('/works/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const result = yield (0, db_1.delOneWork)(id);
    (0, utils_1.logHelper)(result, res);
}));
/** 添加作品*/
worksRouter.post('/works/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = (0, add_1.dealAddOneWork)(req, res);
    const result = yield (0, db_1.addOneWorks)(updateData);
    (0, utils_1.logHelper)(result, res);
}));
// 增加角色
worksRouter.post('/works/tags/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const tagToAdd = (0, tags_1.dealTagsToAdd)(req, res);
    const result = yield (0, db_1.addTagsToWorks)(id, tagToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除角色列表
worksRouter.post('/works/tags/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const tagToRemoves = (0, tags_1.dealTagsToRemove)(req, res);
    const result = yield (0, db_1.removeTagFromWorks)(id, tagToRemoves);
    (0, utils_1.logHelper)(result, res);
}));
exports.default = worksRouter;
