
import Image from 'next/image'
import React from 'react'


function card(props: any) {
    return (
        <div className='w-full flex flex-col  h-96 border-1 border-black bg-gray-200'>
            <div className='h-1/5 w-full text-center p-3'>
                <h5 className='text-xl'>sweat shirt</h5>
                <h5 className='text-xl space-x-3'>
                    <span className='line-through'>
                        {props.items.oldPrice}$
                    </span>
                    <span className='font-bold'>
                        {props.items.salePrice}$
                    </span>

                </h5>
            </div>
            <div className='w-full h-4/5' >
                <Image
                    src={props.items.image}
                    alt="card image"
                    className='h-full mx-auto '
                />
            </div>


        </div>

    )
}

export default card