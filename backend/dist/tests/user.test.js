"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe("User Registration API", () => {
    it("should register a new user and return 201", async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post("/api/users/register")
            .send({
            name: "Ankit",
            email: "ankit@gmail.com",
            password: "12345678"
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.email).toBe("ankit@gmail.com");
    });
});
afterAll(() => {
    jest.useRealTimers();
});
//# sourceMappingURL=user.test.js.map