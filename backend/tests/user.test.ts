import request from "supertest";
import app from "../src/app";

jest.mock("../src/models/user.model.ts");


describe("User Registration API", () => {
  it("should register a new user and return 201", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({
        name: "Ankit",
        email: "ankit@gmail.com",
        password: "12345678",
        role : "user"
      });

    expect(res.status).toBe(201);
  });
});

afterAll(() => {
  // close all timers
  jest.useRealTimers();
});
