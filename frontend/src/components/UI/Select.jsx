export default function Select({ label, name, value, onChange, options, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        name={name}
        id={name}
        data-testid={name === "role" ? "role-select" : ""}
        value={value}
        onChange={onChange}
        className="border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
