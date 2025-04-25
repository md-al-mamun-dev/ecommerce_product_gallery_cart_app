"use client"
import { useState, useRef } from "react"
import Image from "next/image";

export default function ImageGallery({discount, images, productName}) {
    const [activeImage, setActiveImage] = useState(images[0]);
    const sliderRef = useRef(null);

    function onImageClick(data) {
        setActiveImage(data)
    }
    const handleWheel = (e) => {
        if (sliderRef.current) {
          e.preventDefault();
          sliderRef.current.scrollLeft += e.deltaY;
        }
      };
  return (
    <div className="space-y-4 ">
    <div  className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden relative ">
        <Image className="object-contain" alt={`${productName} Image`} fill
          src={process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+activeImage.name} />
    </div>

    <div onWheel={handleWheel} ref={sliderRef} className="w-full max-w-screen flex overflow-x-auto space-x-4 scrollbar-hide px-8 py-2 scroll-smooth no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
      {images.map((img, index) => (
        <div onClick={()=>onImageClick(img)} key={img.id} className={`${activeImage.id === img.id ? 'ring-2 ring-red-500 scale-105' : 'hover:ring-2 hover:ring-red-300 hover:scale-105'} h-24 min-w-32 bg-gray-100 rounded-lg overflow-hidden relative`} >
            <Image src={process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+img.name}
               alt={`Preview ${index + 1}`} className="object-cover w-full h-full" fill/>
        </div>
      ))}
      {images.map((img, index) => (
        <div onClick={()=>onImageClick(img)} key={img.id} className={`${activeImage.id === img.id ? 'ring-2 ring-red-500 scale-105' : 'hover:ring-2 hover:ring-red-300 hover:scale-105'} h-24 min-w-28 bg-gray-100 rounded-lg overflow-hidden relative`} >
            <Image src={process.env.NEXT_PUBLIC_BACKEND_URL+'/storage/product/'+img.name} alt={`Preview ${index + 1}`} className="object-cover w-full h-full" fill/>
        </div>
      ))}
    </div>
  </div>
  )
}
