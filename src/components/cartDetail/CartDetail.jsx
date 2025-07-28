import React from 'react'
import trash_icon from "./images/ant-design_delete-filled.svg"
import { useCart } from '../../zustand/useCart'
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {
    const { cart, increment, decrement, remove } = useCart()
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/checkout");
    };


    // {totalPrice.toFixed(2)}

    return (
        <section className=''>
            <div className="container">
                <div className="flex justify-between gap-[30px]">
                    <div className="flex-2 w-[817px h-[55px]]">
                        <div className="bg-[#f9f1e7] w-full h-[55px] mb-[35px] flex justify-between items-center px-[62px]">
                            <p className='font-medium text-[16px]'>Product</p>
                            <p className='font-medium text-[16px]'>Price</p>
                            <p className='font-medium text-[16px]'>Quantity</p>
                            <p className='font-medium text-[16px]'>Subtotal</p>
                        </div>
                        <div className="w-full h-[256px] overflow-y-scroll">
                            {
                                cart.map((item) => (
                                    <div key={item.id} className="flex justify-between h-[105px] items-center mb-[12px] w-full">
                                        <div className="flex items-center gap-[10px] w-[30%]">
                                            <div className="w-[105px] h-[105px] bg-[#efe6d1] rounded-[10px] flex items-center justify-center overflow-hidden shrink-0">
                                                <img
                                                    src={item.thumbnail}
                                                    onClick={() => navigate(`/products/${item.id}`)}
                                                    alt="product_img"
                                                    className="max-w-full max-h-full cursor-pointer size-[105px] object-contain"
                                                />
                                            </div>
                                            <p className='font-normal text-[16px] truncate text-[#9f9f9f]'>{item.title}</p>
                                        </div>

                                        <p className='w-[15%] text-center font-normal text-[16px] text-[#9f9f9f] truncate'>Rs. {item.price}</p>

                                        <span className='w-[10%] text-center size-[32px] border border-[#9f9f9f] rounded-[5px] flex justify-between px-[10px] items-center'>
                                            <button onClick={() => decrement(item)} disabled={item.quantity <= 1} className='cursor-pointer disabled:opacity-0 text-[18px] text-[#9f9f9f]'>-</button>
                                            {item.quantity}
                                            <button onClick={() => increment(item)} className='cursor-pointer text-[18px] text-[#9f9f9f]'>+</button>
                                        </span>

                                        <p className='w-[15%] text-center font-normal text-[16px] truncate'>Rs. {item.price * item.quantity}</p>

                                        <div className="w-[10%] flex justify-end">
                                            <img src={trash_icon} onClick={() => remove(item)} className='cursor-pointer hover:opacity-70' alt="delete_img" />
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                    <div className="size-[390px] bg-[#f9f1e7] px-[75px] mx-auto">
                        <h2 className='font-bold text-[32px] mb-[61px] mt-[15px] text-center'>Cart Totals</h2>
                        <div className="flex justify-between items-center mb-[31px]">
                            <p className='font-medium text-[16px]'>Subtotal: </p>
                            <p className='font-medium text-[16px] text-[#9f9f9f]'>Rs. {totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center mb-[42px]">
                            <p className='font-medium text-[16px]'>Total: </p>
                            <p className='font-medium text-[20px] text-[#B88E2F]'>Rs. {totalPrice.toFixed(2)}</p>
                        </div>
                        <button onClick={handleClick} className='text-center w-full py-[14px] px-[58px] border-[1px] rounded-[15px] font-normal text-[20px] hover:bg-[#B88E2F] hover:text-[#fff] duration-300'>Check Out</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartDetail