"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_js_1 = require("./config/db.js");
const PORT = process.env.PORT || 3000;
(0, db_js_1.DatabaseConnect)();
app_1.default.listen(PORT, () => {
    console.log(` Server started on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map