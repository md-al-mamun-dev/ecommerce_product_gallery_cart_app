"use client"
import ImageGallery from "../ImageGallery"
import QuentitySelector from "./QuentitySelector"
import AddToCartButton from "./AddToCartButton"
import LoadingSkeleton from "./LoadingSkeleton"
import ProductDetailsError from "./ProductDetailsError"
import formatProductDescription from "@/lib/formatProductDescription"
import useProduct from "@/lib/hooks/useProduct"


export default function ProductDetails({id}) {
    const { data, loading, error } = useProduct(id);
    const { name, short_desc, is_discount, price, discount_amount, product_images } = data;

  return (
    loading || (!data && !error)
        ? <LoadingSkeleton/>
        : error 
            ? <ProductDetailsError/>
            :  <>
                {   product_images 
                        && <ImageGallery images={product_images} productName={name}/>
                }
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
                        <div className="text-gray-600 mb-6">
                        {formatProductDescription(short_desc).map((line, index) => (<p key={index}>{line}</p>))}
                        </div>
                    </div>
                    <QuentitySelector price={price} discount={discount_amount} isDiscount={is_discount == 1 }/>
                    <AddToCartButton data={data}/>
                </div>
            
            </>
  )
}
