"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = exports.userCreateController = void 0;
const user_service_1 = require("../services/user.service");
const userCreateController = async (req, res) => {
    try {
        const user = await (0, user_service_1.userCreate)(req.body);
        return res.status(201).json({ success: true, user });
    }
    catch (e) {
        res.status(400).json({ success: false, error: e });
    }
};
exports.userCreateController = userCreateController;
const userLoginController = async (req, res) => {
    try {
        const user = await (0, user_service_1.userLogin)(req.body);
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }
        return res.json({ success: true, user });
    }
    catch (e) {
        res.status(400).json({ success: false, error: e });
    }
};
exports.userLoginController = userLoginController;
//# sourceMappingURL=user.controller.js.map