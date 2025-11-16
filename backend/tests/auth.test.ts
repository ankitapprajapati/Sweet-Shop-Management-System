import request from "supertest";
import app from "../src/app";

describe("Auth API", () => {
  const baseUrl = "/api/auth";

  it("should register a new user", async () => {
    const res = await request(app)
      .post(`${baseUrl}/register`)
      .send({
        email: "user@example.com",
        password: "password123",
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("email", "user@example.com");
    expect(res.body).not.toHaveProperty("password");
  });

  it("should not allow duplicate emails", async () => {
    await request(app)
      .post(`${baseUrl}/register`)
      .send({
        email: "dup@example.com",
        password: "password123",
      });

    const res = await request(app)
      .post(`${baseUrl}/register`)
      .send({
        email: "dup@example.com",
        password: "password123",
      });

    expect(res.status).toBe(400);
  });

  it("should login and return a JWT token", async () => {
    await request(app)
      .post(`${baseUrl}/register`)
      .send({
        email: "login@example.com",
        password: "password123",
      });

    const res = await request(app)
      .post(`${baseUrl}/login`)
      .send({
        email: "login@example.com",
        password: "password123",
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
