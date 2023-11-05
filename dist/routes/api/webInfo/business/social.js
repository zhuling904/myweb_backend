"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealDelSocial = exports.dealAddSocial = void 0;
function dealAddSocial(req, res) {
    const { socialToAdd } = req.body;
    if (!socialToAdd || !socialToAdd.name || !socialToAdd.link) {
        return res
            .status(400)
            .json({ error: 'Missing required socialToAdd parameters' });
    }
    return socialToAdd;
}
exports.dealAddSocial = dealAddSocial;
function dealDelSocial(req, res) {
    const { socialNameToRemove } = req.body;
    if (!socialNameToRemove) {
        return res
            .status(400)
            .json({ error: 'Missing required socialNameToRemove parameters' });
    }
    return socialNameToRemove;
}
exports.dealDelSocial = dealDelSocial;
