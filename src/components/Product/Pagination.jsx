"use client"
import PaginationLoadingSkeleton from "./PaginationLoadingSkeleton"
import useProducts from "@/lib/hooks/useProducts";

export default function Pagination({ loading, error}) {
  const { current_page, per_page, total, fetchPreviousPage, fetchNextPage, goTo } = useProducts();
  const pageCount = total > per_page ? Math.ceil(total/per_page) : 1

  if (loading) return <PaginationLoadingSkeleton />;
  if (error) return null;

  return (
    <div className="mt-10 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {current_page > 1 
          && (<button onClick={fetchPreviousPage} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>)}
              
        {current_page < pageCount 
          && (<button onClick={fetchNextPage} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>)}
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className='mx-auto'>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {current_page > 1 && (
              <button onClick={fetchPreviousPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            { Array.from({ length: pageCount }, (_, i) => i + 1)
                  .map(i => ( (i === current_page) 
                    ? ( <div key={i} aria-current="page" className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                          {i}
                        </div>) 
                    : ( <button key={i} onClick={() => goTo(i)} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                          {i}
                        </button>)
                      ))}

            { current_page < pageCount 
                && (<button onClick={fetchNextPage} 
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </button> )}
          </nav>
        </div>
      </div>
    </div>
  )
}