import Link from 'next/link'
import React from 'react'
import Wrapper from '../shared/Wrapper'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

function page() {
    return (
        <Wrapper>
            <div className='h-[85vh] w-full text-xl md:text-2xl  flex place-content-center place-items-center'>
                <div className='w-full h-3/5 sm:w-3/4 md:h-1/2 md:w-1/2 bg-gray-200  p-10 flex  flex-wrap items-stretch'>

                    <div className='flex items-center gap-x-4 w-full'>
                        <div className='bg-green-600 p-1 text-3xl rounded-full'>
                            <TiTick className='text-white' />
                        </div>
                        <h1 className='w-full'>
                            you have succcesfully checked out
                        </h1>
                    </div>
                    <div className='group flex items-center gap-x-3 justify-content-end'>

                        <AiOutlineArrowLeft className='group-hover:-translate-x-1 transition-transform' />
                        <Link href="/" className="">Home</Link>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default page