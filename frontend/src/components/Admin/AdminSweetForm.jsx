import { useState } from "react";
import axios from "axios";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function AdminSweetForm({ onClose, onCreated }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/sweets", {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });

    onCreated();
    onClose();
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-50 mt-4">
      <h3 className="text-2xl font-semibold mb-4">Create a new sweet</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          placeholder="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <Input
          placeholder="Price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
        />

        <Input
          placeholder="Quantity"
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
        />

        <div className="flex gap-3">
          <Button type="submit">Create</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
