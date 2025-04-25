"use client"
import Image from "next/image"

export default function ProductItem({data}) {
    const { name, price, image, quantity, totalItemPrice } = data;
  return (
    <div className="flex justify-between ">
        <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 relative">
                <Image src={process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+image} alt={data.name} fill className="object-cover"/>
            </div>
            <div>
                <h4 className="font-medium">{name}<span className="ml-2 text-red-600">{"("+price+")"}</span></h4> 
                <p className="text-sm text-gray-500">Qty: {quantity}</p>
            </div>
        </div>
        <div className="font-medium mt-4 text-lg">{totalItemPrice}</div>
    </div>
  )
}
