"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/product/productSlice";


export default function useProduct() {
    // const [page, setPage] = useState(1);

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
        dispatch(fetchProducts({path}));
    }, [dispatch, path]);
    
    return { 
            data: data, 
            loading, 
            error,  
            fetchPreviousPage: prevPage,
            fetchNextPage: nextPage,
            goTo: moveToPageWithPageNumber
        };
}