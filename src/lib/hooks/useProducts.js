"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/product/productSlice";


export default function useProducts() {
    const [path, setPath] = useState('/all/product/get');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.product);

    function prevPage() {
        if (!data?.next_page_url) {
            return
        }
        setPath(data?.prev_page_url.replace("https://admin.refabry.com/api/all", ""));  
    }

    function nextPage() {
        if (!data?.next_page_url) {
            return
        }
        setPath(data?.next_page_url).replace("https://admin.refabry.com/api/all", "");       
    }

    function moveToPageWithPageNumber(page){
        setPath(`/all/product/get?page=${page}`)
    }
    
    useEffect(() => {
        console.log("invoke product fetching")
        if(!data || !data.data ){
            dispatch(fetchProducts({path}));
        }
    }, [dispatch, path]);
    
    return { 
            products:data.data,
            current_page:data.current_page,
            per_page:data.per_page,
            total:data.total,
            loading, 
            error,  
            fetchPreviousPage: prevPage,
            fetchNextPage: nextPage,
            goTo: moveToPageWithPageNumber
        };
}