"use client"
import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice"
import { useSelector, useDispatch } from "react-redux"

export default function AddToCartButton({data}) {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);

  return (
    <div className="w-full mt-6  items-center flex flex-col md:flex-row-reverse gap-4 justify-between">
        <button onClick={()=>dispatch(addToCart(data))} className=" w-full md:w-2/3  bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition">
            Add to Cart
        </button>
        {
            items.find(item => item.id === data.id) 
            &&  <button onClick={()=>dispatch(removeFromCart(data.id))} className="flex w-full md:w-1/4 lg:w-1/2 justify-center items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white hover:border-red-400 active:scale-[0.98] transition-all duration-200 group">
                    <svg width="24" height="24" viewBox="0 0 24 24"  fill="none" 
                        xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-red-500 transition-colors duration-200">
                        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor"/>
                        <path d="M10 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14 10V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-gray-600 group-hover:text-red-500 md:hidden lg:block">Remove from Cart</span>
                </button>
        }
    </div>

    
  )
}
