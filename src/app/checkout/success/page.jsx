import formatDateTime from "@/lib/fromatDateTime"
import Link from "next/link"

export default async function page({ params, searchParams }) {
const { name, phone, orderId, t_stamp  } = await searchParams

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
    {/* <!-- Success Header --> */}
    <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-xl text-gray-600">Thank you for your purchase, <span className="font-semibold">{name}</span>!</p>
        <p className="text-gray-500 mt-2">A confirmation message has been sent to {phone}</p>
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Order :{orderId}</h2>
            <p className="text-gray-500">Placed on {formatDateTime(t_stamp)}</p>
        </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Delivery Status</h2>
        <div className="relative">
            {/* <!-- Timeline line --> */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* <!-- Timeline steps --> */}
            <div className="relative mb-8 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                </div>
                <h3 className="font-medium text-gray-900">Order Confirmed</h3>
                <p className="text-sm text-gray-500">June 15, 2023 - 2:30 PM</p>
            </div>
            
            <div className="relative mb-8 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-medium text-gray-900">Processing</h3>
                <p className="text-sm text-gray-500">Expected to complete by June 16</p>
            </div>
            
            <div className="relative mb-8 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                <h3 className="font-medium text-gray-400">Shipped</h3>
                <p className="text-sm text-gray-400">Expected June 16-17</p>
            </div>
            
            <div className="relative pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                <h3 className="font-medium text-gray-400">Delivered</h3>
                <p className="text-sm text-gray-400">Expected June 18-20</p>
            </div>
        </div>
    </div>


    <div className="text-center">
        <Link href="/" className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition duration-200 transform hover:-translate-y-0.5 mb-6">
            Continue Shopping
        </Link>
        
        <div className="mt-8">
            <p className="text-gray-500 mb-3">Share your purchase with friends</p>
            <p className="text-sm text-gray-400 mt-3">Get 10% off your next order when you share!</p>
        </div>
    </div>
</div>
  )
}
