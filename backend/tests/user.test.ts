import request from "supertest";
import app from "../src/app";

describe("User Registration API", () => {
  it("should register a new user and return 201", async () => {
    const res = await request(app)
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
