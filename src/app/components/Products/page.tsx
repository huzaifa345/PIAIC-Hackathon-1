'use client'

import { useEffect, useState } from 'react'
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
    }
}


function Index() {

    const [products, setProducts] = useState<productInterface[]>()

    useEffect(() => {
        getAllProducts().then((res) => { setProducts(res) })
    }, [])

    return (
        <Wrapper>
            <div className='mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {products?.map((product: productInterface) => {
                    return (
                        <div key={product._id} className='h-96'>
                            <Link href={`/components/Products/${product._id}`}>
                                <ProductCard item={product} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Wrapper>

    )
}

export default Index