import React, { useState } from 'react'
import Locate from '../../components/locate/Locate'
import AboutServices from '../../components/aboutServices/AboutServices'
import Products from '../../components/products/Products'
import ShopItems from '../../components/shopItems/ShopItems'
import { useFetch } from "../../hooks/useFetch"
import { useEffect } from 'react'

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [limit, setLimit] = useState(12);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch("https://dummyjson.com/products/categories");
            const data = await res.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            let url = "https://dummyjson.com/products";
            if (selectedCategory !== "all") {
                url = `https://dummyjson.com/products/category/${selectedCategory}`;
            }

            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.products || []);
        };

        fetchProducts();
    }, [selectedCategory]);


    return (
        <>
            <Locate text="Shop" />
            <ShopItems
                categories={categories}
                onFilter={setSelectedCategory}
            />
            <Products
                data={products.slice(0, limit)}
                text={selectedCategory === "all" ? "All Products" : selectedCategory.slice(0, 1).toUpperCase() + selectedCategory.slice(1)}
                limit={limit}
                setLimit={setLimit}
            />
            <AboutServices />
        </>
    )
}

export default Shop
