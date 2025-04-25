import Link from "next/link";
import ImageGallery from "./ImageGallery";
import AddToCartButton from "./ProductDetails.jsx/AddToCartButton";
import QuentitySelector from "./ProductDetails.jsx/QuentitySelector";
import ReloadButton from "@/components/PageReloadButton";
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  try {
    const { id } = await params;
    const product = await getProductDetails(id);

    if (!product) {
      notFound();
    }

    const { name, short_desc, is_discount, price, discount_amount, product_images } = product;

    function formatProductDescription(rawText) {
      if (!rawText) return [];
      return rawText
              .replace(/\|\|/g, "")
              .replace(/\* /g, "• ")
              .split(/\r\n|\r|\n/);
    }

    const formatedLines = formatProductDescription(short_desc);
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <ImageGallery images={product_images} productName={name}/>
        <div className="flex flex-col justify-between">
          <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
              <div className="text-gray-600 mb-6">
              {formatedLines.map((line, index) => (<p key={index}>{line}</p>))}
              </div>
          </div>
          <QuentitySelector price={price} discount={discount_amount} isDiscount={is_discount == 1 }/>
          <AddToCartButton product={product}/>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Product page error:', error);
    
    // Return a user-friendly error UI
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Something Went Wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We're having trouble loading this product. Please try again later.
        </p>
        <ReloadButton/>
        <Link
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }
}



async function getProductDetails(id) {
  try {
    const response = await fetch('https://admin.refabry.com/api/all/product/get');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const product = result.data.data.find((item) => item.id == id);
    
    if (!product) {
      return null; // Triggers notFound()
    }
    
    return product;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Will be caught in the component's try/catch
  }
}