import React, { useState } from 'react'
import Locate from '../../components/locate/Locate'
import AboutServices from '../../components/aboutServices/AboutServices'
import Products from '../../components/products/Products'
import ShopItems from '../../components/shopItems/ShopItems'
import { useFetch } from "../../hooks/useFetch"

const Shop = () => {
    const [limit, setLimit] = useState(16)
    const { data, error, loading } = useFetch("/products", { limit: limit })
    const [selectedCategory, setSelectedCategory] = useState("all")

    const allProducts = data?.products || []

    const filtered = selectedCategory === "all" ? allProducts : allProducts.filter(item => item.category === selectedCategory)

    return (
        <>
            <Locate text="Shop" />
            <ShopItems data={allProducts} onFilter={setSelectedCategory} />
            <Products data={filtered} text="" limit={limit} setLimit={setLimit} />
            <AboutServices />
        </>
    )
}

export default Shop
