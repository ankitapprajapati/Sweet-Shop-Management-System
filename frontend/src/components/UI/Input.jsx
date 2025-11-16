export default function Input({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none ${className}`}
        {...props}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
