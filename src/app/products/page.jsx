import ProductGallery from "@/components/Product/ProductGallery"
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

export default  function page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-4 max-w-7xl mx-auto ">
        <BreadcrumbNavigation/>
        <ProductGallery/>        
      </main>
    </div>
  )
}
