
export default function ProductCardLoadingSkeleton() {
  return (
    <div className="w-56 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-64 relative bg-gray-200 animate-pulse"></div>
        <div className="p-4 space-y-2 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-2/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mt-3"></div>
        </div>
    </div>
  )
}
