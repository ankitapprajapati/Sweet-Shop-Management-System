"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userCreate = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const JWT_SECRET = process.env.JWT_SECRET || "secret-key";
const userCreate = async (payload) => {
    const existing = await user_model_1.UserModel.findOne({ email: payload.email });
    if (existing)
        throw new Error("Email already registered");
    const hashedPassword = await bcryptjs_1.default.hash(payload.password, 10);
    const user = await user_model_1.UserModel.create(Object.assign(Object.assign({}, payload), { password: hashedPassword }));
    const _a = user.toObject(), { password } = _a, userData = __rest(_a, ["password"]);
    return userData;
};
exports.userCreate = userCreate;
const userLogin = async (payload) => {
    const user = await user_model_1.UserModel.findOne({ email: payload.email });
    if (!user)
        throw new Error("Invalid credentials");
    const isMatch = await bcryptjs_1.default.compare(payload.password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    const token = jsonwebtoken_1.default.sign({
        id: user._id,
        email: user.email,
        role: user.role,
    }, JWT_SECRET, { expiresIn: "7d" });
    const _a = user.toObject(), { password } = _a, userData = __rest(_a, ["password"]);
    return { user: userData, token };
};
exports.userLogin = userLogin;
//# sourceMappingURL=user.service.js.map