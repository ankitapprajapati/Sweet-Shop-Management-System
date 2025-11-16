import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";

describe("Login Page", () => {
  test("login button is disabled if fields are empty", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /login/i })).toBeDisabled();
  });

  test("calls login API on submit", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "user@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "abcd1234" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/logging in/i)).toBeInTheDocument();
  });
});
