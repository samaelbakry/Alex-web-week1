import { useEffect, useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import { getProducts } from "../../services/products";

export default function Heropage() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    const productsData = await getProducts();
    setProducts(productsData?.data?.products || []);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen pb-16">
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6  pt-10 pb-6">
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-sans">
      Welcome to Shopmarkt
    </h1>
    <p className="mt-2 text-base text-stone-600 max-w-2xl">
      Your one-stop online shopping destination for top-quality products at the best prices.
    </p>
  </div>

  <main className="max-w-7xl mx-auto px-4 sm:px-6 ">
    {products && products.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 mt-4">
        <p className="text-stone-500 font-medium">No products found.</p>
      </div>
    )}
  </main>

</div>
  );
}
