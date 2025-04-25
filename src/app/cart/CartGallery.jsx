"use client"
import CartItem from "./CartItem";
import {  useSelector } from "react-redux"

export default function CartGallery() {
    const { items } = useSelector((state) => state.cart);
  return (
    <>
        {
            items.length > 0 
                ? items.map(item =>(<CartItem key={item.id} data={item}/>) )
                : <div className="flex items-center justify-center h-32">
                    <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  </div>
        }
    </>
  )
}
