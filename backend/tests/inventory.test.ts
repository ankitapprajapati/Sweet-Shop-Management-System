import request from "supertest";
import app from "../src/app";

const authUrl = "/api/auth";
const sweetsUrl = "/api/sweets";

async function createAdminAndSweet() {
  await request(app).post(`${authUrl}/register`).send({
    email: "inventory-admin@example.com",
    password: "password123",
    role: "admin",
  });

  const loginRes = await request(app).post(`${authUrl}/login`).send({
    email: "inventory-admin@example.com",
    password: "password123",
  });

  const token = loginRes.body.token as string;

  const createSweetRes = await request(app)
    .post(sweetsUrl)
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Jalebi",
      category: "Traditional",
      price: 80,
      quantity: 100,
    });

  return { token, sweetId: createSweetRes.body.id };
}

describe("Inventory API", () => {
  it("should purchase a sweet and reduce quantity", async () => {
    const { token, sweetId } = await createAdminAndSweet();

    const purchaseRes = await request(app)
      .post(`${sweetsUrl}/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 10 });

    expect(purchaseRes.status).toBe(200);
    expect(purchaseRes.body.quantity).toBe(90);
  });

  it("should not allow purchasing more than available quantity", async () => {
    const { token, sweetId } = await createAdminAndSweet();

    const purchaseRes = await request(app)
      .post(`${sweetsUrl}/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 1000 });

    expect(purchaseRes.status).toBe(400);
  });

  it("should only allow admin to restock", async () => {
    const { sweetId, token: adminToken } = await createAdminAndSweet();

    await request(app).post(`${authUrl}/register`).send({
      email: "normal@example.com",
      password: "password123",
      role: "user",
    });

    const loginRes = await request(app).post(`${authUrl}/login`).send({
      email: "normal@example.com",
      password: "password123",
    });

    const userToken = loginRes.body.token as string;

    const nonAdminRes = await request(app)
      .post(`${sweetsUrl}/${sweetId}/restock`)
      .set("Authorization", `Bearer ${userToken}`)
      .send({ quantity: 10 });

    expect(nonAdminRes.status).toBe(403);

    const adminRes = await request(app)
      .post(`${sweetsUrl}/${sweetId}/restock`)
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ quantity: 10 });

    expect(adminRes.status).toBe(200);
    expect(adminRes.body.quantity).toBeGreaterThan(100);
  });
});
