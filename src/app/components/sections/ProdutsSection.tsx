'use client'

import React, { useEffect, useState } from 'react'
import Wrapper from '../shared/Wrapper'
import ProductCard from '../shared/ProductCard';
import { getAllProducts } from '@/lib/getAllProducts'
import { productInterface } from '../Products/page'
import Link from 'next/link';


function ProdutsSection() {
    const [products, setProducts] = useState<productInterface[]>()

    useEffect(() => {
        getAllProducts().then((res) => { setProducts(res) })
    }, [])

    // Product functionality in small devices

    const initialIndex = {
        count: 0,
    };

    const [index, setindex] = useState(initialIndex);
    // let maxIncrement = products!.length - 1;
    // const increment = () => {
    //     if (index.count < maxIncrement) {
    //         setindex({ count: index.count + 1 });
    //         document.getElementById("decButton")?.removeAttribute('disabled')
    //     }
    //     else {
    //         document.getElementById("incButton")?.setAttribute('disabled', 'true')
    //     }
    // };

    // const decrement = () => {
    //     if (index.count > 0) {
    //         setindex({count: index.count - 1 });
    //         document.getElementById("incButton")?.removeAttribute('disabled')
    //     }
    //     else {
    //         document.getElementById("decButton")?.setAttribute('disabled', 'true')
    //     }
    // };

    return (
        <Wrapper>
            <div className='mt-8 h-max space-y-6' >
                <div className=' py-5 space-y-5  text-center '>
                    <h4 className='text-md font-bold text-blue-500'>
                        PRODUCTS
                    </h4>
                    <h2 className='text-4xl font-bold'>
                        Check What We Have
                    </h2>
                </div>
                <div className='hidden w-full sm:grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3'>

                    {products?.map((item) => {

                        return (
                            <div key={item.title}>
                                <ProductCard item={item} />
                            </div>
                        )
                    })}

                </div>
                {/* <div className='sm:hidden flex justify-between items-center'>
                    <button id='decButton' className='w-10 h-10 rounded-full bg-gray-500' onClick={decrement}>&lt;</button>
                    <div className='w-3/4 h-96 '>
                        {<ProductCard items={products[index.count]} />}
                    </div>
                    <button id='incButton' className='w-10 h-10 rounded-full bg-gray-500' onClick={increment}>&gt;</button>

                </div> */}

                <div className='w-full flex justify-end'>
                    <button className=' w-full sm:w-2/4  md:w-2/5 xl:w-2/6 bg-slate-900 font-medium text-xl text-white p-3'>
                        <Link href="/components/Products">
                            See All Products
                        </Link>
                    </button>
                </div>


            </div>

        </Wrapper>
    )


}

export default ProdutsSection
