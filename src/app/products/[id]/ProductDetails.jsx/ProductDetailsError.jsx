"use client"
import Link from "next/link";

export default function ProductDetailsError({ message = "Something went wrong. Please try again later." }) {
  
    const handleReload = () => {
      window.location.reload(); 
    };
  
    return (
      <>
      <div className="col-span-2 ">
        <div className="w-20 mx-auto h-20 flex items-center justify-center rounded-full bg-red-600 text-white text-4xl">
          <span>!</span>
        </div>
  
        <h1 className="text-center mx-auto text-3xl font-bold text-gray-800 mt-10">Oops, something went wrong!</h1>
        <p className="text-gray-600 text-lg text-center">{message}</p>
        <div className="flex space-x-4 mt-4 mt-10 mx-auto justify-center">
          <Link href="/"
            className="px-6 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
          >
            Home
          </Link>
          <button
            onClick={handleReload}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Reload Page
          </button>
        </div>
      </div>
        {/* Custom Error Icon (Triangle with exclamation mark) */}
        
  
        
      </>
    );
  }