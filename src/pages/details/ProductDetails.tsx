import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { Star } from "lucide-react";

export default function ProductDetails() {
  const [product, setProduct] = useState<any | null>(null);

  const params = useParams();
  const fetchProductDetails = async () => {
    const productData = await getProductById(params.id as string);
    setProduct(productData?.data ? productData.data : null);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.id]);

  return (
    <div className="min-h-screen rounded-2xl bg-stone-100 shadow p-10 m-10">
      <div className="bg-white border  border-gray-200 hover:shadow-md transition overflow-hidden duration-500 rounded-2xl p-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full px-1  ">
          <p className="bg-blue-100 text-blue-800 rounded-2xl px-3 py-1 text-sm ">
            {product?.shippingInformation}
          </p>
          <span
            className={`text-sm px-5 py-1  rounded-full mb-2 ${product?.availabilityStatus === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {product?.availabilityStatus} {product?.stock}
          </span>
        </div>
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-48 object-contain"
        />
        <div className="text-center">
          <h3 className="text-lg font-bold mt-2">{product?.title}</h3>
          <p>{product?.description?.slice(0, 40)}...</p>
        </div>
        <p className="text-gray-600 mt-1">${product?.price.toFixed(2)}</p>
        <div className="flex justify-between items-center w-full mt-2">
          <p>{product?.brand}</p>
          <div className="flex items-center gap-2">
            <p>{product?.rating}</p>
            <Star
              size={15}
              className={`${product?.rating >= 3 ? "text-yellow-400 fill-amber-300" : "text-gray-300"}`}
            />
          </div>
        </div>
      </div>
      {product && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Product Reviews
          </h4>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-3">
              {product.reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="p-3 bg-stone-100 border border-stone-200 rounded-lg shadow-sm flex flex-col justify-between gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-stone-800 text-sm">
                      {review.reviewerName}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100  rounded-full flex items-center gap-1">
                      <Star size={15} className="fill-amber-300 text-amber-300" />
                      {review.rating}/5
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 italic">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
