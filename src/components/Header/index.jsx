import CartButton from "./CartButton";
import MiniCart from "./MiniCart";

export default function Header() {

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">      
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Sample<span className="text-red-600">Logo</span>
        </a>
      </div>
      <div className="flex items-center space-x-4 relative">
        <MiniCart/>
        <CartButton/>
      </div>
    </div>
  </div>
</header>
  )
}
