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
exports.insertTagsAtPosition = exports.addTagsToWorks = exports.removeTagFromWorks = exports.updateWorksPartial = exports.delOneWork = exports.getOneWorks = exports.getAllWorks = exports.addWorks = void 0;
const models_1 = require("../../../models");
const worksDataToAdd = {
    type: 'animation',
    tags: ['动画', 'CSS'],
    title: '拖拽排序',
    desc: '一个拖拽排序列表',
    coverImg: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    link: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    avatarImg: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    likes: 1,
    visitors: 1,
};
/** 新增一条数据 */
function addWorks() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.MODLES.works.create(worksDataToAdd);
    });
}
exports.addWorks = addWorks;
/** 获取works数据 */
function getAllWorks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield models_1.MODLES.webInfo.find().exec();
            if (document) {
                console.log('作品列表存在:', document);
                return document;
            }
            else {
                console.log('作品列表不存在');
                return null;
            }
        }
        catch (err) {
            console.error('查询作品列表失败:', err);
            return null;
        }
    });
}
exports.getAllWorks = getAllWorks;
/** 获取一个work的数据 */
function getOneWorks(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield models_1.MODLES.webInfo
                .findOne({
                _id: id,
            })
                .exec();
            if (document) {
                console.log('作品存在:', document);
                return document;
            }
            else {
                console.log('作品不存在');
                return null;
            }
        }
        catch (err) {
            console.error('查询作品失败:', err);
            return null;
        }
    });
}
exports.getOneWorks = getOneWorks;
/** 删除指定work */
function delOneWork(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield models_1.MODLES.webInfo
                .findOneAndRemove({
                _id: id,
            })
                .exec();
            if (document) {
                console.log('作品已删除:', document);
                return document;
            }
            else {
                console.log('作品不存在');
                return null;
            }
        }
        catch (err) {
            console.error('删除作品失败:', err);
            return null;
        }
    });
}
exports.delOneWork = delOneWork;
/** 更新works的数据： 任意字段 */
function updateWorksPartial(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedWorks = yield models_1.MODLES.webInfo
                .findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
                .exec();
            if (updatedWorks) {
                console.log('作品信息部分更新成功:', updatedWorks);
                return updatedWorks;
            }
            else {
                console.log('作品信息不存在，无法部分更新');
                return null;
            }
        }
        catch (err) {
            console.error('作品信息更新失败:', err);
            return null;
        }
    });
}
exports.updateWorksPartial = updateWorksPartial;
/** 删除tags中的指定内容 */
function removeTagFromWorks(id, tagToRemoves) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTags = yield models_1.MODLES.webInfo
                .findByIdAndUpdate({ _id: id }, { $pull: { tags: tagToRemoves } }, { new: true })
                .exec();
            if (updatedTags) {
                console.log(`标签 "${tagToRemoves}" 已从tags中移除:`, updatedTags);
                return updatedTags;
            }
            else {
                console.log('标签信息不存在，无法执行删除操作');
                return null;
            }
        }
        catch (err) {
            console.error('从标签信息中删除角色失败:', err);
            return null;
        }
    });
}
exports.removeTagFromWorks = removeTagFromWorks;
/** 创建一个函数来向 tags 数组中添加指定内容 */
function addTagsToWorks(id, tagToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTags = yield models_1.MODLES.webInfo
                .findByIdAndUpdate({ _id: id }, { $push: { tags: tagToAdd } }, { new: true })
                .exec();
            if (updatedTags) {
                console.log(`标签 "${tagToAdd}" 已添加到信息中:`, updatedTags);
                return updatedTags;
            }
            else {
                console.log('标签列表不存在，无法执行添加操作');
                return null;
            }
        }
        catch (err) {
            console.error('向标签列表中添加标签失败:', err);
            return null;
        }
    });
}
exports.addTagsToWorks = addTagsToWorks;
/** 创建一个函数来在 tags 数组的指定位置插入内容 */
function insertTagsAtPosition(id, tagToInsert, position) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTags = yield models_1.MODLES.webInfo
                .findByIdAndUpdate({ _id: id }, { $push: { tags: { $each: [tagToInsert], $position: position } } }, { new: true })
                .exec();
            if (updatedTags) {
                console.log(`标签 "${updatedTags}" 已插入到标签列表中的位置 ${position}:`, updatedTags);
                return updatedTags;
            }
            else {
                console.log('标签信息不存在，无法执行插入操作');
                return null;
            }
        }
        catch (err) {
            console.error('在标签列表中插入标签失败:', err);
            return null;
        }
    });
}
exports.insertTagsAtPosition = insertTagsAtPosition;
