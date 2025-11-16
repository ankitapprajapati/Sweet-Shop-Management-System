import { render, screen, fireEvent } from "@testing-library/react";
import AdminPanel from "../pages/AdminPanel";
import { AuthContext } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Admin Panel", () => {
  test("renders add sweet form for admin users", () => {
    render(
      <AuthContext.Provider value={{ user: { role: "admin" } }}>
        <MemoryRouter>
          <AdminPanel />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/add sweet/i)).toBeInTheDocument();
  });

  test("delete button calls API", async () => {
    render(
      <AuthContext.Provider value={{ user: { role: "admin" } }}>
        <MemoryRouter>
          <AdminPanel />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(await screen.findByText(/deleting/i)).toBeInTheDocument();
  });
});
