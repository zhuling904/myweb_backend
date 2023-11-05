"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealWorksUpdateData = void 0;
function dealWorksUpdateData(req, res) {
    const { type, subType, tags, title, desc, coverImg, link, avatarImg, likes, visitors, } = req.body;
    const updateData = {};
    // 更新类型
    if (type) {
        updateData.type = type;
    }
    // 二级分类
    if (subType) {
        updateData.subType = subType;
    }
    // 更新标签
    if (tags) {
        if (Array.isArray(tags)) {
            updateData.tags = tags;
        }
        else {
            return res.status(400).json({ error: 'Invalid tags format' });
        }
    }
    // 更新title
    if (title) {
        updateData.title = title;
    }
    // 更新描述
    if (desc) {
        updateData.desc = desc;
    }
    // 封面coverImg
    if (coverImg) {
        updateData.coverImg = coverImg;
    }
    // link链接
    if (link) {
        updateData.link = link;
    }
    // avatarImg,头像
    if (avatarImg) {
        updateData.avatarImg = avatarImg;
    }
    // 更新点赞
    if (likes) {
        if (typeof likes === 'number') {
            updateData.likes = likes;
        }
        else {
            return res.status(400).json({ error: 'Invalid likes format' });
        }
    }
    // 更新访问
    if (visitors) {
        if (typeof visitors === 'number') {
            updateData.visitors = visitors;
        }
        else {
            return res.status(400).json({ error: 'Invalid visitors format' });
        }
    }
    return updateData;
}
exports.dealWorksUpdateData = dealWorksUpdateData;
