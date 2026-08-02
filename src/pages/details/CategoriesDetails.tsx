import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategoryBySlug } from "../../services/categories"
import ProductCard from "../../components/products/ProductCard"

export default function CategoriesDetails() {
  const [categories, setCategories] = useState([])
  const params = useParams()
  const fecthCateg = async ()=>{
   const data = await getCategoryBySlug(params.slug)
    setCategories(data?.data?.products)
    console.log(data?.data)
  }
  useEffect(() => {
    fecthCateg()
  }, [])
  
  return (
   <main className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
    {categories && categories.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 mt-4">
        <p className="text-stone-500 font-medium">No products found.</p>
      </div>
    )}
  </main>
  )
}
