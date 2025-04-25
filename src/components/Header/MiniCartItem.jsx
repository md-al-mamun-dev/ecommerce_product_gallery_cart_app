"use client"
import { removeFromCart } from "@/lib/redux/features/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"


export default function MiniCartItem({data}) {
    const { name, quantity , totalItemPrice, price } = data 
    const dispatch = useDispatch()
    
    return (
      <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 mr-2">
              <Image src={process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+data.image}
                  alt={name} width={50} height={50} className="w-12 h-12 rounded-lg object-cover"/>
            </div>
          <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                { name }
              </p>
          </div>

          <div className='flex items-center space-x-1 text-xs font-medium ml-auto mr-2'>
              <span>{'('+price}</span>
              <span>X</span>
              <span>{quantity + ')'}</span>
          </div>

          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            { totalItemPrice}
          </span>
          <button 
            onClick={()=>dispatch(removeFromCart(data.id))} 
            className=' ml-2 courser-pointer hover:text-red-500 group'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-red-500 transition-colors duration-200">
              <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor"/>
              <path d="M10 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
      </div>
    )
}
