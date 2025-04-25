import Link from "next/link"

export default async function page() {
  return (
    <div className="flex-grow wave-pattern flex items-center bg-red-50">
    <div className="container mx-auto px-4 py-12 max-w-4xl ">
        <div className="bg-white   overflow-hidden">
            <div className="md:flex">
                {/* <!-- Left Column --> */}
                <div className="w-full bg-red-50 flex items-center justify-center p-8">
                    <div className="text-center">                        
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Order Failed</h2>
                        <p className="text-red-500">We couldn't process this order</p>
                        <Link href="/cart" className="border mt-20 bg-green-600 hover:bg-green-500 text-gray-50 py-3 px-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center">
                            <i className="fas fa-shopping-cart mr-2"></i> Back to Cart
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}