import { fetchProductById } from "@/lib/redux/features/product/productSlice";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import AddToCartButton from "./AddToCartButton";
import QuentitySelector from "./QuentitySelector";


export default async function page({ params }) {
    const { id } = await params

    const product = await fetchProductById(id);
    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Oops! Product Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                The product you’re looking for might be sold out or doesn’t exist.
              </p>
              <Link
                href="/"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
              >
                Back to Shop
              </Link>
            </div>
          );
    }

    const { name, short_desc, isPublished, is_discount, price, stock, discount_amount, category, product_images } = product;


      function formatProductDescription(rawText) {
        if (!rawText) return "";
          
        return rawText
                .replace(/\|\|/g, "")
                .replace(/\* /g, "• ")
                .split(/\r\n|\r|\n/);
      }
      const formatedLines = formatProductDescription(short_desc);
    
      return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
          {/* Image Gallery */}
            <ImageGallery images={product_images} productName={name} 
                // discount={Math.round((discount_amount / price) * 100)}
                />
    
          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
                <div className="text-gray-600 mb-6">
                {formatedLines
                    .map((line, index) =>(<p key={index}>{line}</p>))}
                </div>

              {/* <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Select Size:</h4>
                <div className="flex space-x-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className="border border-gray-300 hover:border-red-600 rounded-md px-4 py-2 text-sm transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div> */}
    
            </div>
            <QuentitySelector price={price} discount={discount_amount} isDiscount={is_discount == 1 }/>
            <AddToCartButton product={product}/>
            
          </div>
        </div>
      );
}


