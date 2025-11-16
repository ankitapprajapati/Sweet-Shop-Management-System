import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import LoadingMessage from "../UI/LoadingMessage";
import  Button  from "../UI/Button";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/users/login`,
        form
      );

      // Store token or user data as needed
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 500);
    } catch {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded border-input" />
          <span className="text-muted-foreground">Remember me</span>
        </label>
        <a href="#" className="text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full gradient-primary hover:opacity-90 transition-smooth font-semibold"
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      {loading && <LoadingMessage text="Authenticating..." />}
    </form>
  );
}
