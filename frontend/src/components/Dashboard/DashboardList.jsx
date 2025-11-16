import SweetCard from "./SweetCard";

export default function DashboardList({ sweets }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {sweets.map((sweet) => (
        <SweetCard key={sweet._id} sweet={sweet} />
      ))}
    </div>
  );
}
