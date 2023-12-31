"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealAddOneWork = void 0;
function dealAddOneWork(req, res) {
    const { type, subType, tags, title, desc, coverImg = '', link = '', avatarImg = '', } = req.body;
    const updateData = {};
    // 更新类型
    if (!type) {
        return res.status(400).json({ error: 'Invalid type format' });
    }
    // 更新类型
    if (!subType) {
        return res.status(400).json({ error: 'Invalid subType format' });
    }
    // 更新标签
    if (!tags || !Array.isArray(tags)) {
        return res.status(400).json({ error: 'Invalid tags format' });
    }
    // 更新title
    if (!title) {
        return res.status(400).json({ error: 'Invalid title format' });
    }
    // 更新描述
    if (!desc) {
        return res.status(400).json({ error: 'Invalid desc format' });
    }
    // link链接
    if (!link) {
        return res.status(400).json({ error: 'Invalid link format' });
    }
    updateData.type = type;
    updateData.tags = tags;
    updateData.title = title;
    updateData.desc = desc;
    updateData.subType = subType;
    updateData.coverImg = coverImg
        ? coverImg
        : 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500';
    updateData.link = link;
    updateData.avatarImg = avatarImg
        ? avatarImg
        : 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500';
    updateData.likes = 0;
    updateData.visitors = 0;
    return updateData;
}
exports.dealAddOneWork = dealAddOneWork;
