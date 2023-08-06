import React from 'react'
import Wrapper from '../shared/Wrapper'

function NewsLetter() {
    return (
        <Wrapper>
            <div className='w-4/5 opacity-25 flex flex-wrap place-content-center tracking-wider h-96 absolute font-extrabold text-gray-400 -z-10 text-6xl md:text-7xl lg:text-8xl font-serif text-center'>
                NEWS LETTER
            </div>
            <div className='relative mt-2 p-3 h-96 text-center space-x-3 flex place-content-center content-evenly flex-wrap'>
                <h2 className=' w-full text-5xl font-bold'>
                    Subscribe Our News Letter
                </h2>
                <h5 className='w-full text-xl'>
                    Get the latest information about deals and offers directly
                </h5>

                <input type="email" name="email" id="email" placeholder='Enter Your Email' className='border-2 text-xl p-3 w-full md:w-3/5 lg:w-3/5' />

                <button className=' w-2/6 md:w-3/12 lg:w-1/5 bg-slate-900 font-medium text-xl text-white p-3'>
                    Subscribe
                </button>
            </div>
        </Wrapper>
    )
}

export default NewsLetter