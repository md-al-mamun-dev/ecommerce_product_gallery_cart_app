import Image from "next/image"
import ProductCardLoadingSkeleton from "./ProductCardLoadingSkeleton"
import Link from "next/link";

export default function ProductCard({data}) {
  const { image,  price, discount_amount, name, is_discount,  category } = data;

  return (
    <Link href={`/products/${data.id}`} target="_blank"  className="w-full">
      <div className="bg-white rounded-2xl  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-64 relative">
            <Image alt="product image"  src={ process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+image } className="w-full  object-cover " fill/>        
          {
            is_discount != 0
            &&  <div className="absolute bottom-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-r-md shadow-md">
                  {'৳' + discount_amount} OFF
                </div>
          }
          </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{category.name}</p>
          {
            is_discount != 0
              ? <div className="mt-2 flex justify-end items-center space-x-2">                
                    <span className="text-sm text-gray-500 line-through">{'৳' +  price}</span>
                    <span className="text-red-600 font-bold">{'৳' + (price - discount_amount) }</span>
                  </div>
              : <p className="mt-2 text-red-600 font-bold ml-auto text-right">{'৳'+price}</p>
          }          
        </div>
      </div>
    </Link>

    
  )
}
