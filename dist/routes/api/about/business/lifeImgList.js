"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealDelLifeImgList = exports.dealAddLifeImgList = void 0;
function dealAddLifeImgList(req, res) {
    const { lifeImgListToAdd } = req.body;
    if (!lifeImgListToAdd.title ||
        !lifeImgListToAdd.desc ||
        !lifeImgListToAdd.time ||
        !lifeImgListToAdd.url) {
        return res
            .status(400)
            .json({ error: 'Missing required lifeImgListToAdd parameters' });
    }
    return lifeImgListToAdd;
}
exports.dealAddLifeImgList = dealAddLifeImgList;
function dealDelLifeImgList(req, res) {
    const { lifeImgListNameToRemove } = req.body;
    if (!lifeImgListNameToRemove) {
        return res
            .status(400)
            .json({ error: 'Missing required lifeImgListNameToRemove parameters' });
    }
    return lifeImgListNameToRemove;
}
exports.dealDelLifeImgList = dealDelLifeImgList;
