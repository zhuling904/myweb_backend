"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const webInfoSchema = new Schema({
    author: {
        type: String,
        default: '朱领',
        required: true,
    },
    roles: {
        type: Array,
        default: [
            "前端工程师",
            "篮球爱好者"
        ],
        required: true,
    },
    motto: {
        type: String,
        default: "或许你不相信现在的我，但你可以期待未来的我。",
        required: true
    },
    social: {
        type: Array,
        default: [
            {
                "name": "掘金",
                "link": ""
            }
        ]
    },
});
const webInfoModel = mongoose_1.default.model('webInfo', webInfoSchema);
exports.default = webInfoModel;
