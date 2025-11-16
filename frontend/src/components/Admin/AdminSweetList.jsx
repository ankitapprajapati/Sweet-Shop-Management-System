import AdminSweetCard from "./AdminSweetCard";

export default function AdminSweetList({ sweets, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {sweets.map((s) => (
        <AdminSweetCard key={s._id} sweet={s} onChange={onChange} />
      ))}
    </div>
  );
}
