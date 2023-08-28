'use client'

import { SetStateAction, useEffect, useState } from 'react'
import Wrapper from '../shared/Wrapper'
import ProductCard from '../shared/ProductCard'
import Link from 'next/link'
import { getAllProducts } from '@/lib/getAllProducts'


export interface productInterface {
    _id: string,
    title: string,
    description: string,
    price: number,
    image: {
        _type: 'image';
        asset: {
            _type: 'reference';
            _ref: string;
        };
        alt?: string;
        caption?: string;
        hotspot?: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    },
    moreImages : any
    // moreImages :{
    //     asset :{
    //         _type: 'reference';
    //         _ref: string;
    //     },
    //     _type : 'product detail images',
    //     _key : string

    // }[] ;
}


export default function Index (props : any) {
    const [products, setProducts] = useState<productInterface[]>()

    useEffect(() => {
        getAllProducts(props.category!).then((res) => { setProducts(res) }) 
    }, [])

    return (
        <Wrapper>
            <div className='mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {products?.map((product: productInterface) => {
                    return (
                        <div key={product._id} className='h-96'>
                            <Link href={`/components/Products/details/${product._id}`}>
                                <ProductCard item={product} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Wrapper>

    )
}
Index.defaultProps = {
    category : "all"
}

// export default Index