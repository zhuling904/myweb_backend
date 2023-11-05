"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// 文档结构模型
const aboutSchema = new Schema({
    author: {
        type: String,
        default: '朱领',
        require: true,
    },
    // 介绍
    introduce: {
        type: String,
        default: '一个热爱生活和分享技术的前端工程师。我希望能够通过我的博客，与大家分享我的生活态度、经历和技术的学习，希望带给大家一些启发和帮助！',
        require: true,
    },
    // 技能
    skills: {
        type: [String],
        default: ['react'],
        require: true,
    },
    // 职业经历
    experience: {
        type: Array,
        default: [
            {
                title: '即时设计',
                time: '2022年7月1日-至今',
                function: '前端工程师，图形学方向，编辑器开发，主要成果-即时白板',
            },
        ],
        require: true,
    },
    future: {
        type: String,
        default: '测试测试',
        require: true,
    },
    lifeImgList: {
        type: Array,
        default: [
            {
                title: '一张图片',
                desc: '描述',
                time: '2022年7月1日',
                url: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
            },
        ],
        require: true,
    },
});
const aboutModel = mongoose_1.default.model('about', aboutSchema);
exports.default = aboutModel;
