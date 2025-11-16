import axios from "axios";
import Button from "../UI/Button";

export default function AdminSweetCard({ sweet, onChange }) {
  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_BASEURL}/api/api/sweets/${sweet._id}`,{
      headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    onChange(); // refresh list
  };

  const handleRestock = async () => {
    await axios.post(`${import.meta.env.VITE_BASEURL}/api/sweets/${sweet._id}/restock`, { quantity: 1 },{
      headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    onChange();
  };

  return (
    <div className="p-4 border shadow-md rounded-lg bg-white">
      <h3 className="text-xl font-semibold">{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Quantity: {sweet.quantity}</p>

      <div className="flex gap-3 mt-4">
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleRestock}>Restock</Button>
      </div>
    </div>
  );
}
