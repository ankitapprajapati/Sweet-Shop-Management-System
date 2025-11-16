import { useEffect, useState } from "react";
import axios from "axios";
import AdminSweetList from "../components/Admin/AdminSweetList";
import AdminSweetForm from "../components/Admin/AdminSweetForm";
import Button from "../components/UI/Button";

export default function AdminPanel() {
  const [sweets, setSweets] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchSweets = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASEURL}/api/sweets`,{
       headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    setSweets(res.data.sweets);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>

      <Button onClick={() => setShowForm(true)}>Add Sweet</Button>

      {showForm && (
        <AdminSweetForm
          onClose={() => setShowForm(false)}
          onCreated={fetchSweets}
        />
      )}

      <AdminSweetList sweets={sweets} onChange={fetchSweets} />
    </div>
  );
}
