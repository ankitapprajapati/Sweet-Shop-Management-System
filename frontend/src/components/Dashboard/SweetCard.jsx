import Button from "../UI/Button";

export default function SweetCard({ sweet }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{sweet.name}</h3>
      <p className="text-gray-600">Category: {sweet.category}</p>
      <p className="text-gray-800 font-medium">Price: ₹{sweet.price}</p>
      <p className="text-gray-800 font-medium">Qty: {sweet.quantity}</p>

      <Button
        disabled={sweet.quantity === 0}
        className="mt-3"
      >
        Purchase
      </Button>
    </div>
  );
}
