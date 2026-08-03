import  { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categories";
import { Link } from "react-router-dom";

export default function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCateg = async () => {
      const data = await getAllCategories();
      setCategory(data?.data);
      console.log(data);
    };
    fetchCateg();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6  pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-sans">
          Choose Category
        </h1>
        <p className="mt-2 text-base text-stone-600 max-w-2xl">
          Your one-stop online shopping destination for top-quality products at
          the best prices.
        </p>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {category && category.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.map((item) => (
              <Link
                to={`/categories/${item.slug}`}
                key={item.id}
                className="bg-white border border-stone-200 hover:border-blue-400 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                  <h2 className="text-lg sm:text-3xl font-bold text-stone-800 group-hover:text-blue-900 transition-colors tracking-tight">
                    {item.name}
                  </h2>
                </div>

                <span className="text-sm font-semibold text-stone-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                  View
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 mt-4">
            <p className="text-stone-500 font-medium">No category found.</p>
          </div>
        )}
      </main>
    </>
  );
}
