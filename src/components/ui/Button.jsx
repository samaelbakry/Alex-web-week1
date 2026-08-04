export default function Button({
 children,
 onClick,
 varient = "primary",
 size="md",
 loading= false,
 disabled = false,
 className="",
 type="button",
 item
}) {
  const varients = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-white",
    success: "bg-green-500 hover:bg-green-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  }

  const sizes ={
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  }
  return (
    <button
      type={type}
      className={`transition rounded-xl font-semibold cursor-pointer mt-2 ${varients[varient]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      onClick={item ? () => onClick(item) : onClick}
    >
     {loading ? "Loading" : children}
    </button>
  );
}
