"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userCreate = void 0;
const user_model_1 = require("../models/user.model");
const userCreate = async (Paylaod) => {
    return await user_model_1.UserModel.create(Paylaod);
};
exports.userCreate = userCreate;
const userLogin = async (Paylaod) => {
    const user = await user_model_1.UserModel.findOne({ email: Paylaod.email });
    if (!user)
        return null;
    if (Paylaod.password !== user.password)
        return null;
    return user;
};
exports.userLogin = userLogin;
//# sourceMappingURL=user.service.js.map