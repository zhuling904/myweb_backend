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
exports.updateWebInfo = exports.findWebInfo = exports.delWebInfo = exports.addWebInfo = void 0;
const models_1 = require("../../../models");
/** 增加 */
function addWebInfo(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { author, roles, motto, social } = options;
        const webInfo = yield findWebInfo();
        /** 已经添加过了，直接返回 */
        if (webInfo.length != 0)
            console.log('✅ ~ 已经添加过了，直接返回:');
        yield models_1.MODLES.webInfo.create({
            author,
            roles,
            motto,
            social,
        });
    });
}
exports.addWebInfo = addWebInfo;
/** 删除 */
function delWebInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield models_1.MODLES.webInfo.deleteOne();
    });
}
exports.delWebInfo = delWebInfo;
/** 查找 */
function findWebInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield models_1.MODLES.webInfo.find());
    });
}
exports.findWebInfo = findWebInfo;
/** 更新 */
function updateWebInfo(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { author, roles, motto, social } = options;
        return yield models_1.MODLES.webInfo.updateOne({
            author,
            roles,
            motto,
            social,
        });
    });
}
exports.updateWebInfo = updateWebInfo;
