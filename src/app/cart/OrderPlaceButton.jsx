"use client"
import { useSelector } from "react-redux"
import Link from "next/link";

export default function OrderPlaceButton() {
    const { totalQuantity,
            deliveryOption } = useSelector((state) => state.cart);
  return (
    <div className=" flex">
        {
            (totalQuantity == 0 || deliveryOption.id == "")
                ?   <span className="w-full bg-gray-200 text-gray-400 cursor-not-allowed py-3 px-6 rounded-lg text-center">
                        Place Order
                    </span>
                :   <Link  href="/checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg"> 
                        Place Order
                    </Link>
        }
    </div>    
  )
}
