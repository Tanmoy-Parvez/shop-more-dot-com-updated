import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../pages/Redux/Actions/productActions";

const useProducts = () => {
    const [product, setProduct] = useState([]);

    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get('https://shop-more-dotcom.herokuapp.com/products')
            .catch(err => {
                console.log("Error", err.message);
            })
        dispatch(setProducts(response.data));
    }

    const reload = () => {
        if (!product.length) {
            fetchProducts()
        }
    }

    useEffect(() => {
        fetchProducts()
        setProduct((products?.allProducts?.products))
    }, [reload])



    return [product, setProduct]
}


export default useProducts;