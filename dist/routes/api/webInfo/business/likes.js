"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealLikeData = void 0;
function dealLikeData(req, res) {
    const { action } = req.body;
    // 验证action参数，必须是'increment'或'decrement'
    if (action !== 'increment' && action !== 'decrement') {
        return res.status(400).json({ error: 'Invalid action parameter' });
    }
    // 构建更新字段
    const updateFields = { action: 'increment' };
    if (action) {
        updateFields.action = action;
    }
    return updateFields.action;
}
exports.dealLikeData = dealLikeData;
