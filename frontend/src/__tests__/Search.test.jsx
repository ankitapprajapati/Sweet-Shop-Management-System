import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { AuthContext } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Sweet Search", () => {
  test("filters sweets by name", async () => {
    render(
      <AuthContext.Provider value={{ user: { token: "test" } }}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/search sweets/i), {
      target: { value: "lad" },
    });

    expect(await screen.findByText(/ladoo/i)).toBeInTheDocument();
    expect(screen.queryByText(/barfi/i)).not.toBeInTheDocument();
  });
});
