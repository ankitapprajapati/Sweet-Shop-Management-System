import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { AuthContext } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { server, rest } from "../testServer";

describe("Dashboard Page", () => {
  test("shows sweets from API", async () => {
    render(
      <AuthContext.Provider value={{ user: { token: "123" } }}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(await screen.findByText(/ladoo/i)).toBeInTheDocument();
    expect(await screen.findByText(/barfi/i)).toBeInTheDocument();
  });
});
