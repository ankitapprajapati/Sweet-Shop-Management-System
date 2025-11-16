"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = exports.userCreateController = void 0;
const user_service_1 = require("../services/user.service");
const userCreateController = async (req, res) => {
    try {
        const user = await (0, user_service_1.userCreate)(req.body);
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.userCreateController = userCreateController;
const userLoginController = async (req, res) => {
    try {
        const data = await (0, user_service_1.userLogin)(req.body);
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: data.user,
            token: data.token,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.userLoginController = userLoginController;
//# sourceMappingURL=user.controller.js.map