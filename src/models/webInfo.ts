import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// 文档结构模型
const webInfoSchema = new Schema({
  // 作者
  author: {
    type: String, //类型
    default: '朱领',
    required: true,
  },
  // 角色
  roles: {
    type: [String], //类型
    default: ['前端工程师', '篮球爱好者'],
    required: true,
  },
  // 座右铭
  motto: {
    type: String,
    default: '或许你不相信现在的我，但你可以期待未来的我。',
    required: true,
  },
  // 社交连接
  social: {
    type: Array,
    default: [
      {
        name: '掘金',
        link: '',
        info: '',
      },
    ],
  },

  // 点赞人数
  likes: {
    type: Number,
    required: true,
  },

  // 访问人数
  visitors: {
    type: Number,
    required: true,
  },
});
const webInfoModel = mongoose.model('webInfo', webInfoSchema);

export default webInfoModel;
