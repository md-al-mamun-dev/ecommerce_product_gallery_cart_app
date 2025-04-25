import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          This product doesn't exist or may have been removed.
        </p>
        <Link
          href="/products"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  