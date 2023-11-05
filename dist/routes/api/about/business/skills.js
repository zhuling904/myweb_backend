"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealSkillToRemove = exports.dealSkillToAdd = void 0;
function dealSkillToAdd(req, res) {
    const { skillToAdd } = req.body;
    if (!skillToAdd) {
        return res
            .status(400)
            .json({ error: 'Missing required skillToAdd parameters' });
    }
    return skillToAdd;
}
exports.dealSkillToAdd = dealSkillToAdd;
function dealSkillToRemove(req, res) {
    const { skillToRemove } = req.body;
    if (!skillToRemove) {
        return res
            .status(400)
            .json({ error: 'Missing required skillToRemove parameters' });
    }
    return skillToRemove;
}
exports.dealSkillToRemove = dealSkillToRemove;
