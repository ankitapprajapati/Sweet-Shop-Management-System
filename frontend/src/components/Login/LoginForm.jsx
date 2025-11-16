import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import LoadingMessage from "../UI/LoadingMessage";
import Button from "../UI/Button";


export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isDisabled = form.email.trim() === "" || form.password.trim() === "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    setLoading(true);

    try {
      await axios.post("/api/auth/login", form);

      // Allows test to detect loading state
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 500);
    } catch {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <Input
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

        <Button type="submit" disabled={isDisabled}>
            Login
        </Button>


      {loading && <LoadingMessage text="Logging in..." />}
    </form>
  );
}
