"use client"
import getStripePromise from '@/lib/stripe';
import React from 'react'
import { cart } from './Cart';


type props = {
    cartData: cart[]
}

function CheckoutButton(props: props) {
    const { cartData } = props;

    async function checkOut() {
        const stripe =await getStripePromise();
        
        const response = await fetch("/api/stripe", {
            method: "POST",
            headers :{"Content-type":"application/json "},
            body: JSON.stringify(cartData)
        })
        const data = await response.json()
        if(data.session) {
           stripe?.redirectToCheckout({sessionId: data.session.id})
        }
    }
    // sm:w-2/4  md:w-2/5 xl:w-2/6 lg:2/4
    return (
        <div className=' w-full '>
            <button className='   w-full   bg-slate-900 font-medium text-xl text-white p-3 text-center' onClick={checkOut}>Check Out</button>
        </div>
    )
}

export default CheckoutButton