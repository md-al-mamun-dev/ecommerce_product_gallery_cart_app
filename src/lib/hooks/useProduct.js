"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/features/product/productSlice";

export default function useProductDetails(id) {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.product);
    
    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);
    
    return { 
            data: product,
            loading:loading, 
            error:error,
        };
}