import ProductDetails from './ProductDetails.jsx';
import { notFound } from 'next/navigation';


export default async function Page({ params }) {
  const { id } = await params
  
  if (!id) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <ProductDetails id={id}/>
    </div>)
}
