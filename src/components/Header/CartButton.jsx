"use client"
import { useSelector, useDispatch } from "react-redux"
import {toggleMiniCart} from "@/lib/redux/features/control/controlSlice"
import { usePathname } from "next/navigation";

export default function CartButton() {
    const dispatch = useDispatch();
    const { totalQuantity } = useSelector((state) => state.cart);
    const pathname = usePathname()

    if(pathname === "/cart" || pathname === "/checkout") {
        return null;
    }

    return (
      <button onClick={()=> dispatch(toggleMiniCart())} className="relative">
          <svg className="h-6 w-6 text-gray-700 hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 00.97 1.3h11.66a1 1 0 00.97-1.3L17 13M7 13V6H17v7"></path>
          </svg>
          {
              totalQuantity > 0 
                  && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{totalQuantity}</span>
          }
      </button>
    )
}
