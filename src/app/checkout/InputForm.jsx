"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setError, setValue, removeFieldError } from "@/lib/redux/features/userInfo/userInfoSlice"

export default function InputForm() {
    const dispatch = useDispatch()

    const { errors  } = useSelector((state) => state.userInfo);
    const [nameError, phoneError, addressError] = ['name', 'phone', 'address'].map(
        field => errors.filter(item => item.field === field)
      );

    const [userInfo, setUserInfo] = useState({  name:"",
                                                phone:"",
                                                address:"", })

    function onInputChangeHandlar(event) {
        const name = event.target.name
        setUserInfo(prev => ({...prev, [name]:event.target.value}))

    }

    function onFocusInput(event) {
        dispatch(removeFieldError({field: event.target.name}))
    }

    function onInputBlur(event) {
        const name = event.target.name
        const value = event.target.value
        const phoneRegex = /^(?:\+?88)?01[15-9]\d{8}$/;

        if(value == ""){
            const hasEmptyError = errors.find(error => error.type == "empty" && error.field == name)
            if(!hasEmptyError){
                dispatch(setError({field: name, error:{  type:"empty", errMsg: `${name} is Required`}}))
            }
        }else if(name == "phone" && value !="" && !phoneRegex.test(value)){
            const hasEmptyError = errors.find(error => error.type == "invalid_phone_number" && error.field == name)
            if(!hasEmptyError){
                dispatch(setError({field: name, error:{ type:"invalid_phone_number", errMsg: `${name} is Invalid, it must be valid Bd number`}}))
            }
        }else{
            dispatch(setValue({field:name, value:value}))
        }

    }



  return (
    <div className="space-y-6">
        <div className="relative">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input 
                onChange={onInputChangeHandlar}
                onFocus={onFocusInput}
                onBlur={onInputBlur}
                value={userInfo['name']}        
                name="name"
                placeholder=" Name"
                type="text" id="name" className="w-full px-4 py-2  transition-all duration-200 border focus:outline-none border-gray-200 focus:border-gray-400 focus:shadow rounded-lg"/>
            {
                nameError.length > 0
                && <div className="absolute top-[62px] w-full flex gap-4 justify-end pr-6">{
                        nameError.map((error, index )=> <span key={index} className=" text-sm ml-auto text-red-500 text-right w-full">{error.errMsg}</span>)
                    }</div>
            }
        </div>
        <div className="relative">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input 
                onChange={onInputChangeHandlar}
                onFocus={onFocusInput}
                onBlur={onInputBlur}
                value={userInfo['phone']}
                name="phone"
                placeholder=" Phone number"
                type="text" id="phone" className="w-full px-4 py-2  transition-all duration-200 border focus:outline-none border-gray-200 focus:border-gray-400 focus:shadow rounded-lg"/>
                {
                    phoneError.length > 0
                    && <div className="absolute top-[62px] w-full flex gap-4 justify-end pr-6">{
                            phoneError.map((error, index) => <span key={index} className=" text-sm ml-auto text-red-500 text-right w-full">{error.errMsg}</span>)
                        }</div>
                }
        </div>
        <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
            <input 
                onChange={onInputChangeHandlar}
                onFocus={onFocusInput}
                onBlur={onInputBlur}
                value={userInfo['address']}
                name="address"
                placeholder=" Address"
                type="text" id="address" className="w-full px-4 py-2  transition-all duration-200 border focus:outline-none border-gray-200 focus:border-gray-400 focus:shadow rounded-lg"/>
            {
                addressError.length > 0
                && <div className="absolute top-[62px] w-full flex gap-4 justify-end pr-6">{
                        addressError.map((error, index)=> <span key={index} className=" text-sm ml-auto text-red-500 text-right w-full">{error.errMsg}</span>)
                    }</div>
            }
        </div>
    </div>
  )
}
