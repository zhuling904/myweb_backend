"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealTagsToRemove = exports.dealTagsToAdd = void 0;
function dealTagsToAdd(req, res) {
    const { tagToAdd } = req.body;
    if (!tagToAdd) {
        return res
            .status(400)
            .json({ error: 'Missing required tagToAdd parameters' });
    }
    return tagToAdd;
}
exports.dealTagsToAdd = dealTagsToAdd;
function dealTagsToRemove(req, res) {
    const { tagToRemoves } = req.body;
    if (!tagToRemoves) {
        return res
            .status(400)
            .json({ error: 'Missing required tagToRemoves parameters' });
    }
    return tagToRemoves;
}
exports.dealTagsToRemove = dealTagsToRemove;
