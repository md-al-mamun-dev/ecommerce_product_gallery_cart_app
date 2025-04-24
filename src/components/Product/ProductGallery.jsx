"use client"
import ProductCard from "./ProductCard"
import useProduct from "@/lib/hooks/useProduct"
import ProductCardLoadingSkeleton from "./ProductCardLoadingSkeleton";
import ProductLoadingError from "./ProductLoadingError";
import Pagination from "./Pagination";

export default function ProductGallery() {
    const { data, loading, error } = useProduct();
    const products = data?.data || [];
    
  return (
      <div className="p-4 max-w-7xl mx-auto">
            {
                loading 
                  ? <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      {
                        Array.from({ length: 20 }).map((_, index) => (
                                                                    <ProductCardLoadingSkeleton key={index} />
                                                                  ))
                      }
                    </div>
                  : error 
                    ? <ProductLoadingError/>
                    : <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {
                          products.map((product) => (
                            <ProductCard key={product.id} data={product}/>
                          ))
                        }
                      </div>   
            }

        <Pagination data={data} loading={loading} error={error} />
      </div>
  )
}
