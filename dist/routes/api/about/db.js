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
exports.addLifeImgListToAbout = exports.removeLifeImgListFromAbout = exports.addExperienceToAbout = exports.removeExperienceFromAbout = exports.addSkillToAbout = exports.removeSkillFromAbout = exports.updateAboutPartial = exports.getAbout = exports.addAbout = exports.checkAboutExist = void 0;
const models_1 = require("../../../models");
const aboutDataToAdd = {
    author: '朱领',
    introduce: '一个热爱生活和分享技术的前端工程师。我希望能够通过我的博客，与大家分享我的生活态度、经历和技术的学习，希望带给大家一些启发和帮助！',
    skills: ['HTML', 'CSS', 'JS', 'TS', 'React', 'Webpack'],
    experience: {
        title: '即时设计',
        time: '2022年7月1日-至今',
        function: '前端工程师，图形学方向，编辑器开发，主要成果-即时白板',
    },
    future: '图形学方向，资深前端工程师',
    lifeImgList: [
        {
            title: '一张图片',
            desc: '描述',
            time: '2022年7月1日',
            url: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        },
    ],
};
/** 查询是否存在数据 */
function checkAboutExist() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield models_1.MODLES.about.findOne({ author: '朱领' }).exec();
            if (document) {
                console.log('文档存在:', document);
                return true;
            }
            else {
                console.log('文档不存在');
                return false;
            }
        }
        catch (err) {
            console.error('查询文档失败:', err);
            return false;
        }
    });
}
exports.checkAboutExist = checkAboutExist;
/** 新增一条数据 */
function addAbout() {
    return __awaiter(this, void 0, void 0, function* () {
        const isExist = yield checkAboutExist();
        if (isExist) {
            console.log('数据已经存在');
            return;
        }
        return yield models_1.MODLES.about.create(aboutDataToAdd);
    });
}
exports.addAbout = addAbout;
/** 获取about数据 */
function getAbout() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield models_1.MODLES.about.findOne({ author: '朱领' }).exec();
            if (document) {
                console.log('文档存在:', document);
                return document;
            }
            else {
                console.log('文档不存在');
                return null;
            }
        }
        catch (err) {
            console.error('查询文档失败:', err);
            return null;
        }
    });
}
exports.getAbout = getAbout;
/** 更新about的数据： 任意字段 */
function updateAboutPartial(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedAbout = yield models_1.MODLES.about
                .findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
                .exec();
            if (updatedAbout) {
                console.log('about信息部分更新成功:', updatedAbout);
                return true;
            }
            else {
                console.log('about信息不存在，无法部分更新');
                return false;
            }
        }
        catch (err) {
            console.error('about信息更新失败:', err);
            return false;
        }
    });
}
exports.updateAboutPartial = updateAboutPartial;
/** 删除skills中的指定内容 */
function removeSkillFromAbout(id, skillToRemove) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedSkills = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $pull: { skills: skillToRemove } }, { new: true })
                .exec();
            if (updatedSkills) {
                console.log(`技能 "${skillToRemove}" 已从skills中移除:`, updatedSkills);
                return true;
            }
            else {
                console.log('技能信息不存在，无法执行删除操作');
                return false;
            }
        }
        catch (err) {
            console.error('从技能信息中删除技能失败:', err);
            return false;
        }
    });
}
exports.removeSkillFromAbout = removeSkillFromAbout;
/** 创建一个函数来向 skills 数组中添加指定内容 */
function addSkillToAbout(id, skillToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedSkills = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $push: { skills: skillToAdd } }, { new: true })
                .exec();
            if (updatedSkills) {
                console.log(`技能 "${skillToAdd}" 已添加到技能列表信息中:`, updatedSkills);
                return true;
            }
            else {
                console.log('信息不存在，无法执行添加操作');
                return false;
            }
        }
        catch (err) {
            console.error('向技能信息中添加角色失败:', err);
            return false;
        }
    });
}
exports.addSkillToAbout = addSkillToAbout;
/** 删除experience中的指定内容 */
function removeExperienceFromAbout(id, experienceToRemove) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedExperiences = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $pull: { experience: { title: experienceToRemove } } }, { new: true })
                .exec();
            if (updatedExperiences) {
                console.log(`职业经历 "${experienceToRemove}" 已从experiences中移除:`, updatedExperiences);
                return true;
            }
            else {
                console.log('职业经历信息不存在，无法执行删除操作');
                return false;
            }
        }
        catch (err) {
            console.error('从职业经历信息中删除技能失败:', err);
            return false;
        }
    });
}
exports.removeExperienceFromAbout = removeExperienceFromAbout;
/** 创建一个函数来向 experience 数组中添加指定内容 */
function addExperienceToAbout(id, experienceToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedExperience = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $push: { experience: experienceToAdd } }, { new: true })
                .exec();
            if (updatedExperience) {
                console.log(`职业经历 "${experienceToAdd}" 已添加到职业经历列表信息中:`, updatedExperience);
                return true;
            }
            else {
                console.log('职业经历信息不存在，无法执行添加操作');
                return false;
            }
        }
        catch (err) {
            console.error('向职业经历信息中添加经历失败:', err);
            return false;
        }
    });
}
exports.addExperienceToAbout = addExperienceToAbout;
/** 删除lifeImgList中的指定内容 */
function removeLifeImgListFromAbout(id, lifeImgListNameToRemove) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedLifeImgList = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $pull: { lifeImgList: { title: lifeImgListNameToRemove } } }, { new: true })
                .exec();
            if (updatedLifeImgList) {
                console.log(`日常生活 "${lifeImgListNameToRemove}" 已从lifeImgList中移除:`, updatedLifeImgList);
                return true;
            }
            else {
                console.log('日常生活信息不存在，无法执行删除操作');
                return false;
            }
        }
        catch (err) {
            console.error('从日常生活信息中删除技能失败:', err);
            return false;
        }
    });
}
exports.removeLifeImgListFromAbout = removeLifeImgListFromAbout;
/** 创建一个函数来向 lifeImgList 数组中添加指定内容 */
function addLifeImgListToAbout(id, lifeImgListToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedLifeImgList = yield models_1.MODLES.about
                .findByIdAndUpdate({ _id: id }, { $push: { lifeImgList: lifeImgListToAdd } }, { new: true })
                .exec();
            if (updatedLifeImgList) {
                console.log(` "${lifeImgListToAdd}" 已添加到日常生活列表信息中:`, updatedLifeImgList);
                return true;
            }
            else {
                console.log('日常生活信息不存在，无法执行添加操作');
                return false;
            }
        }
        catch (err) {
            console.error('向日常生活信息中添加经历失败:', err);
            return false;
        }
    });
}
exports.addLifeImgListToAbout = addLifeImgListToAbout;
