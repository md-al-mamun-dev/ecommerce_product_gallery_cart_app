"use client"
import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"

export default function ProductList() {
  const { items,  deliveryOption } = useSelector((state) => state.cart);

  return (
    <>
      {
          items.length > 0 
              ? items.map(item =>(<ProductItem key={item.id} data={item}/>) )
              : <div className="flex items-center justify-center h-32">
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                </div>
      }
      <div className="flex">
        <span>Delivery Provider</span> 
        <div className="ml-4">
          {deliveryOption.name} <br/>
          <span>{deliveryOption.deliveryTime}</span>
        </div>                
      </div>
    </>
  )
}
