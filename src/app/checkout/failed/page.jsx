import Link from "next/link"

export default async function page({searchParams}) {

    const {} = await searchParams
  return (
    <div className="flex-grow wave-pattern flex items-center bg-red-50">
    <div className="container mx-auto px-4 py-12 max-w-4xl ">
        <div className="bg-white   overflow-hidden">
            <div className="md:flex">
                {/* <!-- Left Column - Visual --> */}
                <div className="w-full bg-red-50 flex items-center justify-center p-8">
                    <div className="text-center">
                        
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Order Failed</h2>
                        <p className="text-red-500">We couldn't process this order</p>

                        <Link href="/cart" className="border mt-20 bg-green-600 hover:bg-green-500 text-gray-50 py-3 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center">
                            <i className="fas fa-shopping-cart mr-2"></i> Back to Cart
                    </Link>
                    </div>
                    
                </div>

                {/* <!-- Right Column - Content --> */}
                
            </div>
        </div>
    </div>
</div>
  )
}


{/* <div className="md:w-3/5 p-8">
                    <h3 className="text-xl font-bold mb-4">Sorry, your order #ORD-2023-4567 failed</h3>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0 text-red-500">
                                <i className="fas fa-info-circle"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    <strong>Reason:</strong> Your payment was declined by the issuer. Please try a different payment method.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-medium mb-2">Order Summary</h4>
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between">
                                <span>Wireless Headphones ×1</span>
                                <span>$99.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Smart Watch ×1</span>
                                <span>$199.99</span>
                            </div>
                        </div>
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-medium">
                                <span>Total</span>
                                <span>$299.98</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center">
                            <i className="fas fa-credit-card mr-2"></i> Try Another Payment Method
                        </button>
                        
                        
                        
                        <div className="pt-4 text-center">
                            <p className="text-sm text-gray-600 mb-2">Need help with your order?</p>
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                                <i className="fas fa-headset mr-2"></i> Contact Customer Support
                            </a>
                        </div>
                    </div>
                </div> */}