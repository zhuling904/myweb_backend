"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealRoleToRemove = exports.dealRoleToAdd = void 0;
function dealRoleToAdd(req, res) {
    const { roleToAdd } = req.body;
    if (!roleToAdd) {
        return res
            .status(400)
            .json({ error: 'Missing required roleToAdd parameters' });
    }
    return roleToAdd;
}
exports.dealRoleToAdd = dealRoleToAdd;
function dealRoleToRemove(req, res) {
    const { roleToRemove } = req.body;
    if (!roleToRemove) {
        return res
            .status(400)
            .json({ error: 'Missing required roleToRemove parameters' });
    }
    return roleToRemove;
}
exports.dealRoleToRemove = dealRoleToRemove;
