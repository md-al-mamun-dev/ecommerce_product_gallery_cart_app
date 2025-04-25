import React from 'react'

export default function PaginationLoadingSkeleton() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
            <div className="relative inline-flex items-center rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-transparent">
            Previous
            </div>
            <div className="relative ml-3 inline-flex items-center rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-transparent">
            Next
            </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="mx-auto">
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <div className="relative inline-flex items-center rounded-l-md px-2 py-2 bg-gray-100 text-transparent ring-1 ring-inset ring-gray-200">
                  <span className="sr-only">Previous</span>
                  <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10 inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-transparent">
                    1
                  </div>
                  <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-transparent bg-gray-100 ring-1 ring-inset ring-gray-200">
                    2
                  </div>
                  <div className="relative hidden items-center px-4 py-2 text-sm font-semibold text-transparent bg-gray-100 ring-1 ring-inset ring-gray-200 md:inline-flex">
                    3
                  </div>
                  <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-transparent">
                    ...
                  </div>
                  <div className="relative hidden items-center px-4 py-2 text-sm font-semibold text-transparent bg-gray-100 ring-1 ring-inset ring-gray-200 md:inline-flex">
                    8
                  </div>
                  <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-transparent bg-gray-100 ring-1 ring-inset ring-gray-200">
                    9
                  </div>
                  <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-transparent bg-gray-100 ring-1 ring-inset ring-gray-200">
                    10
                  </div>
                  
                  <div className="relative inline-flex items-center rounded-r-md px-2 py-2 bg-gray-100 text-transparent ring-1 ring-inset ring-gray-200">
                    <span className="sr-only">
                      Next
                    </span>
                    <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                  </div>
              </nav>
            </div>
        </div>
    </div>
  )
}
