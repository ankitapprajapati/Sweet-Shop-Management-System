import SweetCard from "./SweetCard";

export default function DashboardList({ sweets, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {sweets.map((s) => (
        <SweetCard key={s._id} sweet={s} onChange={onChange} />
      ))}
    </div>
  );
}
