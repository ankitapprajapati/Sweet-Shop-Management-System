import axios from "axios";
import Button from "../UI/Button";

export default function SweetCard({ sweet, onChange }) {
  const handlePurchase = async () => {
    await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/sweets/${sweet._id}/purchase`,
        { quantity: 1 },
        {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );
    onChange(); // refresh list after purchase
  };

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Qty: {sweet.quantity}</p>

      <Button
        disabled={sweet.quantity === 0}
        onClick={handlePurchase}
        className="mt-3"
      >
        Purchase
      </Button>
    </div>
  );
}
