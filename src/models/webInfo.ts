import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const webInfoSchema = new Schema({
    author: {
        type: String, //类型
        default: '朱领',
        required: true,
    },
    roles: {
        type: Array, //类型
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
const webInfoModel =  mongoose.model('webInfo', webInfoSchema);

export default webInfoModel;