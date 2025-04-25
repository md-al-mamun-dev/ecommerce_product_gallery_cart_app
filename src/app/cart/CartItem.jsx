"use client"
import Image from "next/image"
import { useDispatch } from "react-redux"  
import { removeFromCart, incrementQuentity, decrementQuentity } from "@/lib/redux/features/cart/cartSlice"

export default function CartItem({data}) {
    const ImageBaseUrl = "https://admin.refabry.com/storage/product/"
    const dispatch = useDispatch()

    const { id, price, image, quantity, totalItemPrice } = data;
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 shadow rounded-xl p-4 gap-4">
        <Image src={ImageBaseUrl + image} alt="Product" width={100} height={100} className="w-24 h-24 rounded-lg" />
        <div className="flex-1">
            <h2 className="text-lg font-semibold">Wireless Headphones</h2>
            <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{"("+price}</span>
                <span> x </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{quantity+")"}</span>   
            </div>        
        </div>
        <div className="flex items-center gap-2">
            <button disabled={(quantity < 2)} onClick={()=>dispatch(decrementQuentity(id))} 
                className={`${quantity < 2 ? "bg-gray-100 text-gray-400" :"bg-gray-200 text-gray-700"  } w-8 h-8 rounded-full   text-sm font-bold`}>-</button>
                <span className={`w-6 text-center`}>{quantity}</span>
            <button onClick={()=>dispatch(incrementQuentity(id))} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-bold">+</button>
        </div>
        <span className="text-md text-gray-500 dark:text-gray-400 font-semibold">{totalItemPrice}</span>

        <button onClick={()=> dispatch(removeFromCart(id))} className="ml-1 text-red-500 hover:text-red-700 group">
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-red-500 transition-colors duration-200"
            >
                <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor"/>
                <path d="M10 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>

    </div>
  )
}
