"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealWebInfoUpdateData = void 0;
function dealWebInfoUpdateData(req, res) {
    const { author, roles, motto, social, avatarImg, likes, visitors } = req.body;
    // 需要更新的数据
    const updateData = {};
    // 更新作者名
    if (author) {
        updateData.author = author;
    }
    // 更新角色
    if (roles) {
        if (Array.isArray(roles)) {
            updateData.roles = roles;
        }
        else {
            return res.status(400).json({ error: 'Invalid roles format' });
        }
    }
    // 更新座右铭
    if (motto) {
        updateData.motto = motto;
    }
    // 更新作者头像
    if (avatarImg) {
        updateData.avatarImg = avatarImg;
    }
    // 更新社交连接
    if (social) {
        if (Array.isArray(social)) {
            updateData.social = social;
        }
        else {
            return res.status(400).json({ error: 'Invalid social format' });
        }
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
exports.dealWebInfoUpdateData = dealWebInfoUpdateData;
