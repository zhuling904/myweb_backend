import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// 文档结构模型
const worksSchema = new Schema({
  // 类型
  type: {
    type: String,
    default: 'animation',
    require: true,
  },
  // 二级分类
  subType: {
    type: String,
    default: '最新',
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
const worksModel = mongoose.model('works', worksSchema);

export default worksModel;
