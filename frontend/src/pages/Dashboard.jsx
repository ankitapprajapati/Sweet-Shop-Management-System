import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/Dashboard/SearchBar";
import DashboardList from "../components/Dashboard/DashboardList";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [filtered, setFiltered] = useState([]);

const fetchSweets = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${import.meta.env.VITE_BASEURL}/api/sweets`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  setSweets(res.data.sweets);
  setFiltered(res.data.sweets);
};


  useEffect(() => {
    fetchSweets();
  }, []);

  const handleSearch = (text) => {
    const lower = text.toLowerCase();
    const results = sweets.filter((s) =>
      s.name.toLowerCase().includes(lower)
    );
    setFiltered(results);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">All Sweets</h2>

      <SearchBar onSearch={handleSearch} />

      <DashboardList sweets={filtered} onChange={fetchSweets} />
    </div>
  );
}
