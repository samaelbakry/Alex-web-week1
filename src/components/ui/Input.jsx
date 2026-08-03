
export default function Input({placeholder , value , loading , setValue , type , icon }) {
  return (

    <div className="relative w-full md:w-80 shrink-0 flex items-center px-3 my-1 border border-gray-300 bg-stone-100 rounded-2xl group">
     <input
        placeholder={placeholder}
        className="rounded-2xl w-full px-2 h-12 focus:outline-none mb-2 group-focus:ring-2 group-focus:ring-blue-500"
        value={value}
        disabled={loading}
        onChange={setValue}
        type={type}
      />
      {icon}
   </div>
  )
}
