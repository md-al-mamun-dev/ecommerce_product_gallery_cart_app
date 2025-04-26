"use client"
import { useSelector } from "react-redux"

export default function CartSummery() {
    const {items, totalPrice,  deliveryOption, tax } = useSelector((state) => state.cart);
    
  return (
    <>
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{items.length > 0 ? totalPrice : 0}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (0%)</span>
          <span>{tax}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Dalivery Charge</span>
          <span>{items.length > 0 ? deliveryOption.price : 0}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{ items.length > 0 ? (totalPrice + tax + deliveryOption.price) : 0 }</span>
        </div>
    </>
  )
}
