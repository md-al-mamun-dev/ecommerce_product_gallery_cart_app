"use client"
import { useSelector, useDispatch } from "react-redux"
import { setAllError } from "@/lib/redux/features/userInfo/userInfoSlice";
import { openWaitingPopup, closeWaitingPopup } from "@/lib/redux/features/control/controlSlice";
import { submitOrder } from "@/lib/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
    const { name,
            phone,
            address,
            errors } = useSelector((state) => state.userInfo);

    const { items,
            totalQuantity,
            totalPrice,
            deliveryOption } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const router = useRouter()

    async function onOrderButtonClick(params) {
        let errors = []
        if(name == ""){
            errors = [...errors, {  type:"empty", errMsg: "Name is required", field:"name" }]
        }
        const phoneRegex = /^(?:\+?88)?01[15-9]\d{8}$/;
        if(phone == ""){
            errors = [...errors, {  type:"empty", errMsg: "Phone is required", field:"phone" }]
        }else if(!phoneRegex.test(phone)){
            errors = [...errors, {  type:"invalid_phone_number", errMsg: "Phone is Invalid", field:"phone" }]
        }
        if(address == ""){
            errors = [...errors, {  type:"empty", errMsg: "Address is required", field:"address" }]
        }
        
        if(errors.length > 0){
          dispatch(setAllError(errors))
          return
        }else if(items.length == 0 || totalPrice == 0 || totalQuantity == 0 || deliveryOption.name == "" ){
          return 
        }else {
          dispatch(openWaitingPopup())
          const { product_ids, s_product_qty } = items
                                                  .reduce((acc, { id, quantity }, index) => ({
                                                    product_ids: acc.product_ids + (index ? ',' : '') + id,
                                                    s_product_qty: acc.s_product_qty + (index ? ',' : '') + quantity
                                                  }), { product_ids: '', s_product_qty: '' });
          const data = {
                            "product_ids": product_ids,
                            "s_product_qty": s_product_qty,
                            "c_phone": phone,
                            "c_name": name,
                            "courier": deliveryOption.id,
                            "address": address,
                            "advance": null,
                            "cod_amount": (totalPrice + deliveryOption.price),
                            "discount_amount": null,
                            "delivery_charge": deliveryOption.price,
                          }

             const result = await dispatch(submitOrder(data))
             if(result.type == "submitOrder/POST/fulfilled"){
                dispatch(closeWaitingPopup())
                const orderId = result.payload.data.unique_id
                const t_stamp = result.payload.data.created_at
                const cod_amount = result.meta.arg.cod_amount
                const courior = result.meta.arg.courier

                router.push(`/checkout/success?name=${name}&address=${address}&phone=${phone}&orderId=${orderId}&t_stamp=${t_stamp}&cod_amount=${cod_amount}&courier=${courior}`)
             }else if(result.type == "submitOrder/POST/rejected"){
                dispatch(closeWaitingPopup())
                router.push(`/checkout/failed`)
             }
        
          }



        
        





    }




  return (
    <button 
      onClick={onOrderButtonClick} 
      disabled={errors.length > 0 || items.length == 0 || totalPrice == 0 || totalQuantity == 0 || deliveryOption.name == "" }
      className={`
          ${ 
            errors.length > 0 || items.length == 0 || totalPrice == 0 || totalQuantity == 0 || deliveryOption.name == ""
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white transition duration-200"
          } 
         w-full py-3 px-4 rounded-lg font-medium`}>
        Place Order
    </button>

  )
}
