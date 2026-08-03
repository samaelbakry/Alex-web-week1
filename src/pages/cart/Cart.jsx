import { useContext } from "react";
import { ProductsContextWrapper } from "../../context/AuthContext";
import ProductCard from "../../components/products/ProductCard";
import { X } from "lucide-react";

export default function Cart() {
  const { cart, declutter } = useContext(ProductsContextWrapper);
  const itemCounts = cart.length;

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-6 border-b border-stone-200">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-sans capitalize">
              Your Vault
            </h1>

            <p className="mt-1.5 text-base text-stone-500 font-normal leading-relaxed max-w-xl">
              You added {" "}
              <span className="font-semibold text-stone-800 font-mono">
                {itemCounts}{" "}
              </span>
              {itemCounts === 1 ? "item" : "items"} to your collection.
            </p>
          </div>
          {cart.length > 0 && (
            <span
              onClick={() => declutter("cart")}
              className="bg-gray-100 hover:bg-gray-200 text-gray-400 px-3 rounded-2xl flex items-center justify-center gap-1 shadow transition-all duration-500 cursor-pointer"
            >
              Clear
              <X size={14} />
            </span>
          )}
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {itemCounts > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-50/50 rounded-2xl border border-dashed border-stone-200 mt-4">
            <p className="text-stone-900 font-medium tracking-wide uppercase text-xs">
              Vault Status
            </p>
            <p className="text-stone-500 text-sm mt-1 font-light">
              Your cart is currently empty.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
