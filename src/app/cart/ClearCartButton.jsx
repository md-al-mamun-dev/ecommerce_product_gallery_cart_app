"use client"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "@/lib/redux/features/cart/cartSlice"

export default function ClearCartButton() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart);

    if(items.length < 1 ){
      return null
    }
    
  return (
    <div className='flex justify-end sm:ml-auto'>
        <button onClick={()=>dispatch(clearCart())} className='underline px-6 py-1 hover:text-red-600 hover:outline hover:outline-red-600 rounded-lg '> clear cart</button> 
    </div>
  )
}

