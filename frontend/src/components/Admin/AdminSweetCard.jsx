import axios from "axios";
import Button from "../UI/Button";

export default function AdminSweetCard({ sweet, onChange }) {
  const handleDelete = async () => {
    await axios.delete(`/api/sweets/${sweet._id}`);
    onChange(); // refresh list
  };

  const handleRestock = async () => {
    await axios.post(`/api/sweets/${sweet._id}/restock`, { quantity: 1 });
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
