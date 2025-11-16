import request from "supertest";
import app from "../src/app";

const authUrl = "/api/auth";
const sweetsUrl = "/api/sweets";

async function createUserAndLogin(isAdmin = false) {
  const email = isAdmin ? "admin@example.com" : "user@example.com";

  await request(app).post(`${authUrl}/register`).send({
    email,
    password: "password123",
    role: isAdmin ? "admin" : "user",
  });

  const loginRes = await request(app).post(`${authUrl}/login`).send({
    email,
    password: "password123",
  });

  return loginRes.body.token as string;
}

describe("Sweets API", () => {
  it("should reject unauthenticated access to sweets list", async () => {
    const res = await request(app).get(sweetsUrl);
    expect(res.status).toBe(401);
  });

  it("should allow authenticated user to create, list, search, update sweets", async () => {
    const token = await createUserAndLogin();

    // Create
    const createRes = await request(app)
      .post(sweetsUrl)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Ladoo",
        category: "Traditional",
        price: 100,
        quantity: 50,
      });

    expect(createRes.status).toBe(201);
    const sweetId = createRes.body.id;

    // List
    const listRes = await request(app)
      .get(sweetsUrl)
      .set("Authorization", `Bearer ${token}`);

    expect(listRes.status).toBe(200);
    expect(listRes.body.length).toBeGreaterThan(0);

    // Search
    const searchRes = await request(app)
      .get(`${sweetsUrl}/search`)
      .set("Authorization", `Bearer ${token}`)
      .query({ name: "Ladoo" });

    expect(searchRes.status).toBe(200);
    expect(searchRes.body[0].name).toBe("Ladoo");

    // Update
    const updateRes = await request(app)
      .put(`${sweetsUrl}/${sweetId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ price: 120 });

    expect(updateRes.status).toBe(200);
    expect(updateRes.body.price).toBe(120);
  });

  it("should allow only admin to delete sweets", async () => {
    const userToken = await createUserAndLogin(false);
    const adminToken = await createUserAndLogin(true);

    const createRes = await request(app)
      .post(sweetsUrl)
      .set("Authorization", `Bearer ${adminToken}`)
      .send({
        name: "Barfi",
        category: "Traditional",
        price: 150,
        quantity: 20,
      });

    const sweetId = createRes.body.id;

    const nonAdminDeleteRes = await request(app)
      .delete(`${sweetsUrl}/${sweetId}`)
      .set("Authorization", `Bearer ${userToken}`);

    expect(nonAdminDeleteRes.status).toBe(403);

    const adminDeleteRes = await request(app)
      .delete(`${sweetsUrl}/${sweetId}`)
      .set("Authorization", `Bearer ${adminToken}`);

    expect(adminDeleteRes.status).toBe(204);
  });
});
