import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { getProductById } from "../../services/products";

export default function ProductDetails() {
  const [product, setProduct] = useState();

  const params = useParams();
  
  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getProductById(params.id);
      setProduct(productData?.data ? productData.data : null);
    };
    fetchProductDetails();
  }, [params.id]);

  return (
    <div className="min-h-screen bg-stone-100/60 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-80 sm:h-96 bg-stone-50 rounded-2xl p-6 flex items-center justify-center border border-stone-100 relative group">
              {product?.shippingInformation && (
                <span className="absolute top-4 left-4 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                  {product.shippingInformation}
                </span>
              )}

              <img
                src={product?.thumbnail}
                alt={product?.title || "Product image"}
                className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  {product?.brand && (
                    <span className="text-xs uppercase tracking-wider font-bold text-stone-400">
                      {product.brand}
                    </span>
                  )}

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      product?.availabilityStatus === "In Stock"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        : "bg-rose-50 text-rose-700 border border-rose-200/60"
                    }`}
                  >
                    {product?.availabilityStatus}{" "}
                    {product?.stock != null ? `(${product.stock})` : ""}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {product?.title}
                </h1>

                {product?.rating != null && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-md">
                      <span className="text-xs font-bold text-amber-900">
                        {product.rating}
                      </span>
                      <Star
                        size={14}
                        className={`${
                          product.rating >= 3
                            ? "text-amber-400 fill-amber-400"
                            : "text-stone-300"
                        }`}
                      />
                    </div>
                    <span className="text-xs text-stone-400">
                      Overall Rating
                    </span>
                  </div>
                )}

                <p className="text-sm text-stone-600 mt-4 leading-relaxed">
                  {product?.description}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4 mt-auto">
                <div>
                  <span className="text-xs text-stone-400 font-medium block">
                    Price
                  </span>
                  <span className="text-3xl font-black text-stone-900">
                    EGP
                    {product?.price != null ? product.price.toFixed(2) : "0.00"}
                  </span>
                </div>

                <button
                  type="button"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors focus:ring-2 focus:ring-blue-500/20"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {product && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              Product Reviews
              {product.reviews?.length > 0 && (
                <span className="text-xs font-semibold bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full">
                  {product.reviews.length}
                </span>
              )}
            </h3>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.reviews.map((review, idx) => (
                  <div
                    key={review.id || idx}
                    className="p-4 bg-stone-50 border border-stone-200/80 rounded-2xl flex flex-col justify-between gap-3 hover:bg-stone-50/80 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {review.reviewerName
                            ? review.reviewerName.charAt(0).toUpperCase()
                            : "U"}
                        </div>
                        <span className="font-semibold text-stone-800 text-sm truncate">
                          {review.reviewerName}
                        </span>
                      </div>

                      <span className="text-xs font-bold px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-800 rounded-full flex items-center gap-1 shrink-0">
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                        {review.rating}/5
                      </span>
                    </div>

                    <p className="text-sm text-stone-600 italic leading-relaxed">
                      &quot;{review.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                <p className="text-sm text-stone-500 italic">
                  No reviews yet for this product.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
