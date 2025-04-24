"use client"
import { useSelector } from "react-redux"

export default function CartSummery() {
    const {
        totalPrice,
        deliveryOption,
        tax
     } = useSelector((state) => state.cart);


  return (
    <>
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{totalPrice}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (0%)</span>
          <span>{tax}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Dalivery Charge</span>
          <span>{deliveryOption.price}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{totalPrice + tax + deliveryOption.price  }</span>
        </div>
    </>
  )
}
