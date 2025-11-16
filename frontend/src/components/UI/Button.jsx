export default function Button({
  children,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`py-2 rounded-lg text-white font-semibold transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } ${className}`}
    >
      {children}
    </button>
  );
}
