import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard";

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
    <div className="min-h-screen">
      <h1 className="text-3xl text-stone-600 font-sans px-10 mt-10">
        Welcome to Shopmarkt - Your One-Stop Online Shopping Destination!
      </h1>
      <div className="max-w-8xl mx-auto p-10 grid grid-cols-4 gap-2 overflow-hidden ">
        {products.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
