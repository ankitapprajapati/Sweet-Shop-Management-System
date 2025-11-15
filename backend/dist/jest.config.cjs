"use strict";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js", "json"],
    testMatch: ["**/tests/**/*.test.ts"],
    transform: {
        "^.+\\.ts$": "ts-jest"
    }
};
//# sourceMappingURL=jest.config.cjs.map