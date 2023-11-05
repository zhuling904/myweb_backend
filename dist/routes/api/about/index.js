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
const skills_1 = require("./business/skills");
const experience_1 = require("./business/experience");
const lifeImgList_1 = require("./business/lifeImgList");
const aboutRouter = express_1.default.Router();
let jsonParser = body_parser_1.default.json();
/** 获取关于我信息 */
aboutRouter.get('/about', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, db_1.addAbout)();
    const aboutInfo = yield (0, db_1.getAbout)();
    res.json(aboutInfo);
}));
// 更新网站信息: 可更新任意字段信息
aboutRouter.post('/about/update', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const updateData = (0, update_1.dealAboutUpdateData)(req, res);
    const result = yield (0, db_1.updateAboutPartial)(id, updateData);
    (0, utils_1.logHelper)(result, res);
}));
// 增加技能
aboutRouter.post('/about/skills/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const skillToAdd = (0, skills_1.dealSkillToAdd)(req, res);
    const result = yield (0, db_1.addSkillToAbout)(id, skillToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除技能
aboutRouter.post('/about/skills/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const skillToRemove = (0, skills_1.dealSkillToRemove)(req, res);
    const result = yield (0, db_1.removeSkillFromAbout)(id, skillToRemove);
    (0, utils_1.logHelper)(result, res);
}));
// 增加经历
aboutRouter.post('/about/experience/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const experienceToAdd = (0, experience_1.dealAddExperience)(req, res);
    const result = yield (0, db_1.addExperienceToAbout)(id, experienceToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除经历
aboutRouter.post('/about/experience/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const experienceNameToRemove = (0, experience_1.dealDelExperience)(req, res);
    const result = yield (0, db_1.removeExperienceFromAbout)(id, experienceNameToRemove);
    (0, utils_1.logHelper)(result, res);
}));
// 增加日常生活
aboutRouter.post('/about/lifeImgList/add', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const lifeImgListToAdd = (0, lifeImgList_1.dealAddLifeImgList)(req, res);
    const result = yield (0, db_1.addLifeImgListToAbout)(id, lifeImgListToAdd);
    (0, utils_1.logHelper)(result, res);
}));
// 删除日常生活
aboutRouter.post('/about/lifeImgList/del', jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        return res.status(400).json({ error: 'Invalid id parameter' });
    const lifeImgListNameToRemove = (0, lifeImgList_1.dealDelLifeImgList)(req, res);
    const result = yield (0, db_1.removeLifeImgListFromAbout)(id, lifeImgListNameToRemove);
    (0, utils_1.logHelper)(result, res);
}));
exports.default = aboutRouter;
