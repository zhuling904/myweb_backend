"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealDelExperience = exports.dealAddExperience = void 0;
function dealAddExperience(req, res) {
    const { experienceToAdd } = req.body;
    if (!experienceToAdd ||
        !experienceToAdd.title ||
        !experienceToAdd.time ||
        !experienceToAdd.function) {
        return res
            .status(400)
            .json({ error: 'Missing required experienceToAdd parameters' });
    }
    return experienceToAdd;
}
exports.dealAddExperience = dealAddExperience;
function dealDelExperience(req, res) {
    const { experienceNameToRemove } = req.body;
    if (!experienceNameToRemove) {
        return res
            .status(400)
            .json({ error: 'Missing required experienceNameToRemove parameters' });
    }
    return experienceNameToRemove;
}
exports.dealDelExperience = dealDelExperience;
