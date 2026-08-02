import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }: { item: any }) {
  return (
    <Link to={`/productDetails/${item.id}`}>
    <div className="bg-white border  border-gray-200 hover:shadow-md transition overflow-hidden duration-500 rounded-2xl p-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full px-1  ">
        <p className="bg-blue-100 text-blue-800 rounded-2xl px-3 py-1 text-sm ">
          {item.shippingInformation}
        </p>
        <span
          className={`text-sm px-5 py-1  rounded-full mb-2 ${item.availabilityStatus === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {item.availabilityStatus} {item.stock}
        </span>
      </div>
      <img
        src={item?.thumbnail}
        alt={item?.title}
        className="w-full h-48 object-contain"
      />
      <div className="text-center">
        <h3 className="text-lg font-bold mt-2">{item?.title}</h3>
        <p>{item?.description?.slice(0, 40)}...</p>
      </div>
      <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
      <div className="flex justify-between items-center w-full mt-2">
        <p>{item.brand}</p>
        <div className="flex items-center gap-2">
          <p>{item.rating}</p>
          <Star
            size={15}
            className={`${item.rating >= 3 ? "text-yellow-400 fill-amber-300" : "text-gray-300"}`}
          />
        </div>
      </div>
    </div>
    </Link>
  );
}
