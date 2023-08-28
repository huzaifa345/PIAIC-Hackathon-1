"use client"
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { BsCart3 } from 'react-icons/bs'
import close from '@/lib/close'
import CartItemDetails from './CartItemDetails'
import CheckoutButton from './CheckoutButton'
import { AiOutlineDelete } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'
import { urlForImage } from '../../../../../sanity/lib/image'
import Image from 'next/image'
import { data } from '../../data'

export type cart = {
    id: number,
    product_id: string,
    quantity: number,
    user_id: string,
    size: string,
    price: number
}
type props = {
    currentOpenState: boolean;
    openStateFunction: React.Dispatch<React.SetStateAction<boolean>>
}


export async function fetchCartDataFromAPI() {
    try {
        // const response = await fetch('https://hackathone-ecommerce-huzaifa345.vercel.app/api/cart'); 
        const response = await fetch('http://localhost:3000/api/cart');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function Cart(props: props) {

    const [cart, setCart] = React.useState<cart[]>()
    const [details, setDetails] = React.useState(false)
    const [detailItem, setdetailItem] = useState<cart>()

    let totalAmount: number = 0;


    React.useEffect(() => {
        fetchCartDataFromAPI().then(({ res }) => {
            if (res) setCart(res)
        }).catch((err) => { console.log(err) })
    }, [])

    const deleteItem = async (itemId: number) => {


        await toast.promise(handleDelete(itemId), {
            loading: "Removing Item ....",
            success: "Item removing Successfully",
            error: "erron in removing item"
        }, { id: "delete-toast" })


    }

    async function handleDelete(itemId: number) {


        const res = await fetch(`/api/cart/${itemId}`, {
            method: "DELETE"
        });
        if (res.ok) {
            fetchCartDataFromAPI().then(({ res }) => {
                if (res) setCart(res)
            }).catch((err) => { console.log(err) })

            return true
        }
        else { throw new Error("error in removing item") }

    }

    return (

        <div id='cart' className=' border-b border-black  text-black w-full h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800 width-animations bg-opacity-100 absolute z-50 right-0 top-0 bg-white' >
            <Toaster position='top-right'
            />
            <div className='flex justify-between flex-wrap items-center shadow-md p-6 '>
                <div>
                    <BsCart3 className='text-xl' />
                </div>

                <div>
                    <button className=' p-2 shadow-md' onClick={() => { close("cart", props.openStateFunction, props.currentOpenState) }}>
                        <GrFormClose className='text-black text-2xl' />

                    </button>
                </div>

            </div>
            {cart?.length ?
                <div className='mt-5 flex md:flex-row flex-col-reverse gap-x-3 gap-y-5 lg:pr-4'>

                    <div className='mt-2 w-full md:w-[70%] lg:w-3/4'>

                        {
                            cart.map((item: cart, index) => {
                                let amount = item.price * item.quantity
                                totalAmount = totalAmount + amount
                                let product = data.filter(i => item.product_id === i._id)[0]


                                return (
                                    <div key={item.id}>

                                        <div className='flex w-full h-44 shadow-md mt-1'>

                                            <div className="w-full h-40  flex items-center space-x-3 "
                                                onClick={() => {
                                                    setDetails(!details)
                                                    setdetailItem(item)
                                                }}>
                                                <div className='w-1/5 hidden space-y-2 sm:block h-full'>
                                                    <Image
                                                        src={urlForImage(product.image).url()}
                                                        alt='product image'
                                                        height={250}
                                                        width={250}
                                                        
                                                    />
                                                </div>
                                                <div className='md:w-4/5  md:space-y-2 w-full h-full'>
                                                    <h2 className='text-2xl'>
                                                        {product.title}
                                                    </h2>
                                                    <h4>quantity : {item.quantity}</h4>
                                                    <h4>size : {item.size}</h4>
                                                    <h4 className='text-xl grid grid-cols-2'>
                                                        <div>price per unit : ${item.price}</div>
                                                        {item.quantity > 1 && <div className='text-right'>Total Amount : ${amount}</div>}
                                                    </h4>
                                                </div>

                                            </div>
                                            <div className='float-right mt-2 p-2'>
                                                <AiOutlineDelete onClick={() => { deleteItem(item.id) }} className='text-2xl' />
                                            </div>

                                        </div>
                                    </div>
                                )
                            })

                        }


                    </div>
                    <div className='md:w-[30%] lg:w-1/4 items-center  shadow-lg bg-gray-100 h-60 px-3 flex space-y-5 place-content-center flex-wrap' >
                        <h2 className='w-full text-3xl md:text-xl lg:text-3xl font-medium'>
                            Order summary
                        </h2>
                        <div className='grid grid-cols-2  gap-y-2 text-lg w-full'>
                            <h2 >
                                total items
                            </h2>
                            <p>
                                {cart.length} items
                            </p>
                            <h2>
                                subtotal
                            </h2>
                            <p>
                                {totalAmount}$
                            </p>
                        </div>
                        <div className='w-full'>
                            <CheckoutButton cartData={cart} />
                        </div>
                    </div>

                </div> : <div>you have nothing in your cart</div>}

            {
                details && <CartItemDetails cartState={cart} cartSetState={setCart} item={detailItem} state={details} setState={setDetails} />
            }

        </div>
    )
}

export default Cart;