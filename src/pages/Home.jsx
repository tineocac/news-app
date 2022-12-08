import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";

export const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <div>
            <h1>This is my Home page</h1>
        </div>
    );
};