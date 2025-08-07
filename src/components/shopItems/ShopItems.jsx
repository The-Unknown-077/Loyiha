import React from 'react';
import img from "./images/system-uicons_filtering.svg";

const ShopItems = ({ categories, onFilter }) => {
    return (
        <div className="bg-[#F9F1E7] w-full h-[100px] flex justify-center items-center">
            <div className="container relative flex items-center justify-between gap-6 overflow-auto px-4 hide-scrollbar" style={{ scrollBehavior: "smooth" }}>
                <img src={img} alt="Filter Icon" className="min-w-[24px]" />
                <ul className="flex gap-4 whitespace-nowrap">
                    <li
                        onClick={() => onFilter("all")}
                        className="cursor-pointer font-bold hover:bg-black  duration-300 hover:text-white bg-[#f5f5f5] px-[6px] py-[2px] rounded-[4px]"
                    >
                        All
                    </li>
                    {categories.map((categoryObj) => {
                        const category = typeof categoryObj === "string" ? categoryObj : categoryObj.slug;
                        const name = typeof categoryObj === "string" ? categoryObj : categoryObj.name;

                        return (
                            <li
                                key={category}
                                onClick={() => onFilter(category)}
                                className="cursor-pointer capitalize hover:bg-black hover:text-white duration-300 bg-white px-[6px] py-[2px] rounded-[4px]"
                            >
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ShopItems;
