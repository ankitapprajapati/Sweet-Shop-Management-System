import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Select from "../UI/Select";
import LoadingMessage from "../UI/LoadingMessage";
import Button from "../UI/Button";
import { AlertTriangle, XCircle } from "lucide-react"; // Import icons for better feedback

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for API error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Clear previous error message when the user starts typing
    if (error) setError(null);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      await axios.post(`${import.meta.env.VITE_BASEURL}/api/users/register`, form);

      // Successfully registered - show success state briefly then navigate
      setTimeout(() => {
        setLoading(false);
        // Optional: Show a success toast/message before redirecting
        navigate("/login");
      }, 500);
    } catch (err) {
      setLoading(false);
      
      // Determine the error message to display
      if (err.response && err.response.data && err.response.data.message) {
        // Use error message from backend (e.g., "Email already registered")
        setError(err.response.data.message);
      } else {
        // Generic error message for network issues or unknown errors
        setError("Registration failed. Please check your connection or try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">Create Account 🚀</h2>
      
      {/* --- Error Message Display --- */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center gap-2" role="alert">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span className="block sm:inline font-medium">{error}</span>
          <button 
            onClick={() => setError(null)} 
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            aria-label="Close alert"
          >
            <XCircle className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* --- Form Fields --- */}
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

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
        placeholder="Create a secure password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      {/* Note: The ability to register as 'admin' might be restricted in a real app, 
          but kept here as per original requirements. */}
      <Select
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
        options={[
          { value: "user", label: "User (Standard Access)" },
          { value: "admin", label: "Admin (Full Access)" },
        ]}
      />

      {/* --- Submit Button --- */}
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        // Assuming 'gradient-primary' class provides good styling
        className="w-full gradient-primary hover:opacity-90 transition-smooth font-semibold mt-2"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>

      {/* --- Loading Message --- */}
      {loading && <LoadingMessage text="Setting up your account..." />}
    </form>
  );
}