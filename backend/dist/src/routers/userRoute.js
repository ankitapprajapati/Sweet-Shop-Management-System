"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", user_controller_1.userCreateController);
userRouter.post("/login", user_controller_1.userLoginController);
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map