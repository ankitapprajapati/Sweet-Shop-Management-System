import Input from "../UI/Input";

export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-6">
      <Input
        placeholder="Search sweets..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
