"use client"
import ProductCard from "./ProductCard"
import useProducts from "@/lib/hooks/useProducts"
import ProductCardLoadingSkeleton from "./ProductCardLoadingSkeleton";
import ProductLoadingError from "./ProductLoadingError";
import Pagination from "./Pagination";

export default function ProductGallery() {
    const { products, loading, error } = useProducts();
    
  return (
      <div className="p-4 max-w-7xl mx-auto">
        {
          ((!error && !products) || loading)
            ? <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                { Array.from({ length: 10 })
                        .map((_, index) => <ProductCardLoadingSkeleton key={index} /> )
                }
              </div>
            : error 
              ? <ProductLoadingError/>
              : <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  { products.map((product) => (
                      <ProductCard key={product.id} data={product}/>
                    ))
                  }
                </div>
        }
        <Pagination loading={loading} error={error} />
      </div>
  )
}
