import Link from "next/link"

export default function BreadcrumbNavigation() {
  return (
    <nav className="flex items-center text-sm text-gray-500" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    
    <li className="inline-flex items-center">
      <Link href="/" className="inline-flex items-center text-gray-500 hover:text-red-600 transition">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L2 9h3v7h4v-4h2v4h4V9h3L10 2z" /></svg>
        Home
      </Link>
    </li>

    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"><path d="M7.05 4.05a.5.5 0 01.7 0L13.7 10l-5.95 5.95a.5.5 0 11-.7-.7L12.29 10 7.05 4.76a.5.5 0 010-.7z" /></svg>
        <a href="/category" className="text-gray-500 hover:text-red-600 transition">Clothing</a>
      </div>
    </li>

    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"><path d="M7.05 4.05a.5.5 0 01.7 0L13.7 10l-5.95 5.95a.5.5 0 11-.7-.7L12.29 10 7.05 4.76a.5.5 0 010-.7z" /></svg>
        <a href="/category/jackets" className="text-gray-500 hover:text-red-600 transition">Jackets</a>
      </div>
    </li>

  </ol>
</nav>
  )
}
