import PageReloadButton from "@/components/PageReloadButton"

export default function ProductLoadingError() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke="currentColor" className="h-8 w-8 text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800">Failed to Load Products</h3>
        <p className="text-gray-600 max-w-md">
          We're having trouble loading products right now. Please check your internet connection or try again later.
        </p>
        <PageReloadButton/>
      </div>
  )
}
