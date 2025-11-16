import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Select from "../UI/Select";
import LoadingMessage from "../UI/LoadingMessage";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
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
      await axios.post(`${import.meta.env.VITE_BASEURL}/api/users/register`, form);

      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 500);
    } catch {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <Input
        label="Full Name"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <Select
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
        options={[
          { value: "user", label: "User" },
          { value: "admin", label: "Admin" },
        ]}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 rounded-lg"
      >
        Register
      </button>

      {loading && <LoadingMessage text="Creating account..." />}
    </form>
  );
}
