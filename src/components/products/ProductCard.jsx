import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Link to={`/productDetails/${item.id}`} className="block group">
      <div className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl p-4 flex flex-col h-full justify-between overflow-hidden">
        <div>
          <div className="flex items-center justify-between gap-2 w-full mb-3">
            {item?.shippingInformation && (
              <span className="bg-blue-50 text-blue-700 font-medium rounded-full px-2.5 py-1 text-xs truncate max-w-[50%]">
                {item.shippingInformation}
              </span>
            )}
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                item?.availabilityStatus === "In Stock"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-rose-50 text-rose-700"
              }`}
            >
              {item?.availabilityStatus}{" "}
              {item?.stock != null ? `(${item.stock})` : ""}
            </span>
          </div>

          <div className="w-full h-44 flex items-center justify-center overflow-hidden my-2">
            <img
              src={item?.thumbnail}
              alt={item?.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="mt-3">
            {item?.brand && (
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                {item.brand}
              </span>
            )}
            <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {item?.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              {item?.description}
            </p>
          </div>
        </div>

        <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-gray-900">
              EGP {item?.price != null ? item.price.toFixed(2) : "0.00"}
            </span>
          </div>

          {item?.rating != null && (
            <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-md">
              <span className="text-xs font-bold text-amber-900">
                {item.rating}
              </span>
              <Star
                size={14}
                className={`${
                  item.rating >= 3
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
