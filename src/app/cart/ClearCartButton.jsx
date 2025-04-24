"use client"
import { useDispatch } from "react-redux"
import { clearCart } from "@/lib/redux/features/cart/cartSlice"

export default function ClearCartButton() {
    const dispatch = useDispatch()
  return (
    <div className='flex justify-end  sm:ml-auto'>
        <button onClick={()=>dispatch(clearCart())} className='underline px-6 py-1 hover:text-red-600 hover:outline hover:outline-red-600 rounded-lg '> clear cart</button> 
    </div>
  )
}

