import React from 'react'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
import { productInterface } from '../Products/page';


interface props {
    item : productInterface;
}

function ProductCard(props?: props) {
    
    return (
        <div className='w-full h-full text-center group hover:scale-110 transition-transform duration-500 border-1 border-black bg-gray-200 '>
            <div>
                <Image
                    src={urlForImage(props!.item.image).url()}
                    alt="card image"
                    width={250}
                    height={250}
                    className='mx-auto h-3/4'
                />
            </div>
            <div className='p-3'>
                <h5 className='text-xl'>{props!.item.title}</h5>
                <h5 className='text-xl space-x-3'>
                    <span className='font-bold'>
                        {props!.item.price}$
                    </span>
                </h5>
            </div>


        </div>

    )

}

export default ProductCard
