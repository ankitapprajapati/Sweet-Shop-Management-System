import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../pages/Register";
import { MemoryRouter } from "react-router-dom";

describe("Register Page", () => {
  test("renders all input fields", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test("submit button triggers API call", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "abc123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Expect loading or API triggered UI
    expect(await screen.findByText(/creating account/i)).toBeInTheDocument();
  });
});
