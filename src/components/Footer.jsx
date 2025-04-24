import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand Info */}
            <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sample<span className="text-red-500">Logo</span></h3>
            <p className="text-sm leading-relaxed text-gray-600">
                Your go-to destination for premium products. Quality meets comfort in every order.
            </p>
            </div>

            {/* Quick Links */}
            <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Shop</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Deals</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
            </div>

            {/* Customer Support */}
            <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h4>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition">Order Status</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-red-500 transition">FAQs</a></li>
            </ul>
            </div>

            {/* Newsletter / Socials */}
            <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h4>
            <form className="flex mb-4">
                <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button 
                type="submit" 
                className="bg-red-500 p-2 rounded-r-md text-white hover:bg-red-600 transition"
                >
                Subscribe
                </button>
            </form>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500 transition">Facebook</a>
                <a href="#" className="hover:text-red-500 transition">Instagram</a>
                <a href="#" className="hover:text-red-500 transition">Twitter</a>
            </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 py-4 text-center text-sm text-gray-500">
            © 2025 All rights reserved.
        </div>
    </footer>
  )
}
