import React from 'react'
import img from "./images/system-uicons_filtering.svg"

const ShopItems = ({ data, onFilter }) => {

    const categories = data?.map(item => item.category).filter((category, index, arr) => arr.indexOf(category) === index)

    return (
        <div className="bg-[#F9F1E7] w-full h-[100px] flex justify-center items-center">
            <div className="container flex items-center justify-between gap-6 overflow-auto px-4">
                <img src={img} alt="Filter Icon" className="min-w-[24px]" />
                <ul className="flex gap-4 whitespace-nowrap">
                    <li
                        onClick={() => onFilter("all")}
                        className="cursor-pointer font-bold hover:underline"
                    >
                        All
                    </li>
                    {
                        categories.map((category) => (
                            <li
                                key={category}
                                onClick={() => onFilter(category)}
                                className="cursor-pointer hover:underline"
                            >
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShopItems
