import CartButton from "./CartButton";
import MiniCart from "./MiniCart";

export default function Header() {


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Sample<span className="text-red-600">Logo</span>
        </a>
      </div>

      {/* Navigation Links */}
      {/* <nav className="hidden md:flex space-x-8 ml-auto mr-8">
        <a href="#" className="text-gray-700 hover:text-red-600 transition">Add product</a>
        <a href="#" className="text-gray-700 hover:text-red-600 transition">Contact</a>
      </nav> */}

      {/* Icons / Actions */}
      <div className="flex items-center space-x-4 relative">
        <MiniCart/>
        <CartButton/>
      </div>

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden flex items-center">
        <button className="text-gray-700 hover:text-red-600 transition">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div> */}

    </div>
  </div>
</header>
  )
}
