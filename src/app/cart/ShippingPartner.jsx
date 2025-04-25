"use client"
import { useSelector, useDispatch } from "react-redux";
import { setDeliveryOption } from "@/lib/redux/features/cart/cartSlice";

export default function ShippingPartner() {
    const { deliveryOption } = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const shippingOptions = [
        {
          id: 'steadfast',
          name: 'SteadFast',
          deliveryTime: '4-6 business days',
          price: 60
        },
        {
          id: 'pathao',
          name: 'Pathao',
          deliveryTime: '1-2 business days',
          price: 80
        }
      ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Choose a Shipping partner</h3>
      <div className="space-y-3">
        {shippingOptions.map((option) => (
          <label 
            key={option.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
              deliveryOption.id === option.id ? 'border-blue-500 bg-blue-50' : ''
            }`}
          >
            <input
              type="radio"
              name="shipping"
              className="mr-3"
              checked={deliveryOption.id === option.id}
              onChange={() => dispatch(setDeliveryOption(option))}
              value={option.id}
            />
            <div className="flex-1">
              <div className="font-medium">{option.name}</div>
              <div className="text-sm text-gray-500">{option.deliveryTime}</div>
            </div>
            <div className="font-medium">{option.price}</div>
          </label>
        ))}
      </div>
    </div>

  )
}
