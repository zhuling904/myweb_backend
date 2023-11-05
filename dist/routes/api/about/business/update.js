"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealAboutUpdateData = void 0;
function dealAboutUpdateData(req, res) {
    const { author, introduce, skills, experience, future, lifeImgList } = req.body;
    // 需要更新的数据
    const updateData = {};
    // 更新作者名
    if (author) {
        updateData.author = author;
    }
    // 介绍
    if (introduce) {
        updateData.introduce = introduce;
    }
    // 更新角色
    if (skills) {
        if (Array.isArray(skills)) {
            updateData.skills = skills;
        }
        else {
            return res.status(400).json({ error: 'Invalid skills format' });
        }
    }
    // 更新社交连接
    if (experience) {
        if (Array.isArray(experience)) {
            updateData.experience = experience;
        }
        else {
            return res.status(400).json({ error: 'Invalid experience format' });
        }
    }
    // 想成为
    if (future) {
        updateData.future = future;
    }
    // 更新社交连接
    if (lifeImgList) {
        if (Array.isArray(lifeImgList)) {
            updateData.lifeImgList = lifeImgList;
        }
        else {
            return res.status(400).json({ error: 'Invalid lifeImgList format' });
        }
    }
    return updateData;
}
exports.dealAboutUpdateData = dealAboutUpdateData;
