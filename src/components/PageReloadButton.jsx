"use client"

export default function ReloadButton() {
  return (
    <button onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-4xl mb-4 transition-colors duration-200 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span>Retry</span>
    </button> 
  )
}
