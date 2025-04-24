"use client"
import { useSelector } from "react-redux";

export default function PricingSummery() {
    const {
        items,
        totalQuantity,
        totalPrice,
        deliveryOption,
        tax
     } = useSelector((state) => state.cart);
  return (
    <>
        <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-medium text-lg">{totalPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Delivery charge</span>
            <span className="font-medium text-lg">{deliveryOption.price}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
            <span>Total</span>
            <span>{totalPrice + deliveryOption.price }</span>
        </div>
    </>
  )
}
