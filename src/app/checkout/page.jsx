import React from 'react'
import UserInputform from './UserInputform'
import PlaceOrder from './PlaceOrder'
import ProductList from './ProductList'
import PricingSummery from './PricingSummery'
import WaitingPopup from './WaitingPopup'

export default function page() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-7xl'>
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">                
                {/* <!-- Contact form --> */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Please Provide Information</h3>
                    <UserInputform/>                    
                </div>
            </div>

            {/* <!-- Right Column - Order Summary --> */}
            <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                    <h2 className="text-xl font-bold mb-6">Order summary</h2>
                    
                    <div className="space-y-4 mb-6">
                        <ProductList/>
                        
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                        <PricingSummery/>
                    </div>
                    
                    <PlaceOrder/>
                    
                    <div className="mt-4 text-center text-xs text-gray-500">
                        <p className="mb-1"><i className="fas fa-lock mr-1"></i> Secure checkout</p>
                        <p>All transactions are encrypted and secure</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

