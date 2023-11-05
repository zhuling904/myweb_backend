"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHelper = void 0;
function logHelper(result, res) {
    if (result) {
        res.status(200).json({
            msg: '更新成功',
        });
    }
    else {
        res.status(400).json({
            msg: '更新失败',
        });
    }
}
exports.logHelper = logHelper;
