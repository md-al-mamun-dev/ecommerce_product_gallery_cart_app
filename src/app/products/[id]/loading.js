function Skeleton({ className = "", ...props }) {
    return (
      <div
        className={`animate-pulse rounded-md bg-gray-200 ${className}`}
        {...props}
      />
    );
  }

export default function Loading() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="space-y-4">
          {/* Main product image */}
          <Skeleton className="w-full h-96 rounded-xl" />
  
          {/* Image thumbnails carousel */}
          <div className="no-scrollbar w-full max-w-screen flex overflow-x-auto space-x-4 px-8 py-2 scrollbar-hide">
            {[...Array(6)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-24 min-w-28 rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
  
        {/* Right column */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Product title */}
            <Skeleton className="w-2/3 h-8 mb-4" />
  
            {/* Product description lines */}
            <div className="space-y-2 mb-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-full h-4" />
              ))}
            </div>
          </div>
  
          {/* Quantity & Price */}
          <div className="flex items-center mb-6">
            <Skeleton className="w-24 h-10 mr-3" />
  
            <div className="flex items-center border border-gray-200 rounded-md">
              <Skeleton className="w-10 h-10" />
              <Skeleton className="w-12 h-10 border-x border-gray-200" />
              <Skeleton className="w-10 h-10" />
            </div>
  
            <div className="ml-4 flex items-center space-x-2">
              <Skeleton className="w-24 h-8" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>
  
          {/* Buttons */}
          <div className="w-full mt-6 items-center flex flex-col md:flex-row-reverse gap-4 justify-between">
            <Skeleton className="w-full md:w-2/3 h-12 rounded-xl" />
            <Skeleton className="w-full md:w-1/4 lg:w-1/2 h-12 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }