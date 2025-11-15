"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnect = void 0;
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_url = process.env.DATABASE_URL;
const DatabaseConnect = async () => {
    if (mongo_url) {
        await mongoose_1.default.connect(mongo_url)
            .then(() => {
            console.log("db connected successfully");
        })
            .catch((e) => {
            console.log("Error while connecting to mongodb " + e);
            process.exit(1);
        });
    }
    else {
        console.log("mongodb url is not found !");
    }
};
exports.DatabaseConnect = DatabaseConnect;
//# sourceMappingURL=db.js.map