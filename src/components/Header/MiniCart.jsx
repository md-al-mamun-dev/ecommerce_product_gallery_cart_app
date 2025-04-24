"use client"
import { useDispatch, useSelector } from "react-redux";
import MiniCartItem from "./MiniCartItem";
import { useRouter } from "next/navigation";
import { closeMiniCart } from "@/lib/redux/features/control/controlSlice";

export default function MiniCart() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const { showMiniCart } = useSelector((state) => state.control);
    const router = useRouter();
    
    function gotoCartButtonClick(params) {
      dispatch(closeMiniCart())
      router.push("/cart");
    }

    if(showMiniCart){
      return (    
        <div className="absolute top-6 -right-4 w-100 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 z-50 animate-slideInFade">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Your Cart Summery</h2>
            <button className="text-sm text-red-500 hover:underline">Clear</button>
        </div>
    
        
      {/* <!-- Item List --> */}
      <div className="space-y-3 max-h-48 overflow-y-auto">
      {
            items.length > 0 
                ? items.map(item =>(<MiniCartItem key={item.id} data={item}/>) )
                : <div className="flex items-center justify-center h-32">
                    <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  </div>
        }
    
    
        {/* <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Item Name 2</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Qty: 1</p>
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">$10</span>
        </div> */}
      </div>
    
      {/* <!-- Divider --> */}
      <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
    
      {/* <!-- Total + Checkout --> */}
      <div className="font-semibold text-gray-800 dark:text-gray-100 text-right mr-6 text-sm">Total: <span className="ml-8">{totalPrice}</span></div>
      <div className="flex justify-between items-center pt-4">
       
        <button onClick={gotoCartButtonClick} className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl ">Go to Cart</button>
      </div>
        </div>
      )
    }
    else return null  
}
