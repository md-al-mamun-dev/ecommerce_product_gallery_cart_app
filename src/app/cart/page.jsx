import React from 'react'
import CartGallery from './CartGallery'
import CartSummery from './CartSummery'
import ClearCartButton from './ClearCartButton'
import OrderPlaceButton from './OrderPlaceButton'
import ShippingPartner from './ShippingPartner'

export default function page() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {/* <!-- Cart Items --> */}
      <div className="md:col-span-2 space-y-6">
        <div className=' sm:flex'> 
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <ClearCartButton/>
        </div>
        <CartGallery/>
      </div>

      {/* <!-- Summary --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <CartSummery/>
        <OrderPlaceButton/>
        <ShippingPartner/>
      </div>
      
    </div>
  )
}
