"use client"
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { BsCart3 } from 'react-icons/bs'
import close from '@/lib/close'
import CartItemDetails from './CartItemDetails'
import CheckoutButton from './CheckoutButton'

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
function Cart(props: props) {

    const [cart, setCart] = React.useState<cart[]>()
    const [details, setDetails] = React.useState(false)
    const [detailItem, setdetailItem] = useState<string>()
    let totalAmount: number = 0;
    async function fetchCartDataFromAPI() {
        try {
            const response = await fetch('https://hackathone-ecommerce-huzaifa345.vercel.app/api/cart'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            //   console.log(data);

            return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    React.useEffect(() => {
        fetchCartDataFromAPI().then(({ res }) => {
            if (res) setCart(res)
        }).catch((err) => { console.log(err) })
    }, [])


    return (
        <div id='cart' className=' border-b border-black shadow-lg  text-black w-full h-screen width-animations bg-opacity-100 absolute z-50 right-0 top-0 bg-white' >
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

            {cart ?
                <div className='pt-5 h-[78%]  scrollbar-thin scrollbar-track-transparent hover:scrollbar-thumb-slate-800 overflow-y-scroll'>
                    <table className='text-lg lg:text-xl w-full text-center h-[10vh] overflow-scroll'>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>

                        {cart.map((item: cart, index) => {
                            let amount = item.price * item.quantity
                            totalAmount = totalAmount + amount
                            return (
                                <tr
                                    className='h-16  border-b border-black'
                                    key={item.product_id}
                                    onClick={() => {
                                        setDetails(!details)
                                        setdetailItem(item.product_id)
                                    }}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        title
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    <td>
                                        {amount}
                                    </td>
                                </tr>
                            )
                        })
                        }

                        <tr>
                            <td colSpan={3}>
                                Total Cart Amount
                            </td>
                            <td colSpan={2}>
                                {totalAmount}
                            </td>
                        </tr>

                    </table>
                    <div>
                        <CheckoutButton cartData={cart} />
                    </div>
                </div> : <h1>You have nothing in your cart !</h1>}
            {
                details && <CartItemDetails item={detailItem} state={details} setState={setDetails} />
            }

        </div>
    )
}

export default Cart;