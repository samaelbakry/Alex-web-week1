import { useCallback, useEffect, useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import { getProducts, searchForProduct } from "../../services/products";
import Input from "../../components/ui/Input";
import { Search } from "lucide-react";

export default function Heropage() {
  const [products, setProducts] = useState([]);
  const [searchedProd, setSearchedProd] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const dataToShow = searchedProd ?? products;

  const fetchSearch = useCallback(async () => {
    try {
      setLoading(true);
      if (query.length < 4) return console.log("");
      const res = await searchForProduct(query);
      setSearchedProd(res?.data?.products || []);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const productsData = await getProducts();
        setProducts(productsData?.data?.products || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.length < 4) return;

    const timer = setTimeout(() => {
      fetchSearch();
    }, 500);

    return () => clearInterval(timer);
  }, [query, fetchSearch]);

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  pt-10 pb-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-6 border-b border-stone-200">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl font-sans">
              Welcome to Shopmarkt
            </h1>
            <p className="mt-2 text-base text-stone-600 max-w-xl">
              Your one-stop online shopping destination for top-quality products
              at the best prices.
            </p>
          </div>
          <Input
            type="text"
            value={query}
            setValue={(e) => setQuery(e.target.value)}
            placeholder="Search by type..."
            loading={loading}
            icon={
              <Search
                color="blue"
                className="cursor-pointer"
                size={20}
                onClick={fetchSearch}
              />
            }
          />
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 ">
        {dataToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataToShow.map((item) => (
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
