"use client"
import { useDispatch, useSelector} from 'react-redux';
import { incrementCurrentQuantity, decrementCurrentQuantity } from '@/lib/redux/features/cart/cartSlice';

export default function QuentitySelector({price, discount, isDiscount }) {
    const { currentItemQuentity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
      <div className="flex items-center mb-6">
        <span className="mr-3 text-gray-600">Quantity:</span>
        <div className="flex items-center border border-gray-200 rounded-md">
          <button disabled = {currentItemQuentity < 2} onClick={()=> dispatch(decrementCurrentQuantity())}
            className={`${(currentItemQuentity < 2) ? 'text-gray-200' : 'text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200' } px-3 py-1`}>
            -
          </button>
          <span className="px-4 py-1 border-x border-gray-200 text-gray-900">
            {currentItemQuentity}
          </span>
          <button onClick={()=> dispatch(incrementCurrentQuantity())}
            className="px-3 py-1 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200">
            +
          </button>
        </div>
          <div className="flex items-center space-x-3 ml-4 ">
            {
              isDiscount 
                ? <><span className="ml-4 text-2xl font-bold text-red-600 ">
                      ${((price * currentItemQuentity)-(discount* currentItemQuentity))}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ${price * currentItemQuentity}
                    </span></>
                : <span className="ml-4 text-2xl font-bold text-red-600 ">
                    ${(price * currentItemQuentity)}
                  </span>
            }
          </div>
      </div>
    );
}
