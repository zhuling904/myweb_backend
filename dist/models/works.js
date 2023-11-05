"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// 文档结构模型
const worksSchema = new Schema({
    // 类型
    type: {
        type: String,
        default: 'animation',
        require: true,
    },
    // 标签
    tags: {
        type: [String],
        default: ['动画', 'CSS'],
        require: true,
    },
    title: {
        type: String,
        default: '标题',
        require: true,
    },
    desc: {
        type: String,
        default: '这是一个描述',
        require: true,
    },
    coverImg: {
        type: String,
        default: '',
        require: true,
    },
    link: {
        type: String,
        default: '',
        require: true,
    },
    // 头像
    avatarImg: {
        type: String,
        default: '',
        require: true,
    },
    likes: {
        type: Number,
        default: 0,
        require: true,
    },
    visitors: {
        type: Number,
        default: 0,
        require: true,
    },
});
const worksModel = mongoose_1.default.model('works', worksSchema);
exports.default = worksModel;
