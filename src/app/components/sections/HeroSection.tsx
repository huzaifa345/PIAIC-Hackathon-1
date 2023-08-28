import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import HeroImage from '@/app/assets/images/hero image.webp'
import HeroFeatured1 from '../../assets/images/hero/Featured1.webp'
import HeroFeatured2 from '../../assets/images/hero/Featured2.webp'
import HeroFeatured3 from '../../assets/images/hero/Featured3.webp'
import HeroFeatured4 from '../../assets/images/hero/Featured4.webp'
import { BsCart3 } from 'react-icons/bs';



function HeroSection() {
    let heroFeatured = [HeroFeatured1, HeroFeatured2, HeroFeatured3, HeroFeatured4]
    return (

        <Wrapper>
            <section className='lg:flex mt-5  max-h-fit'>

                {/* left side div */}
                <div className='w-full   lg:w-1/2 py-16  space-y-10 pr-10'>
                    <h3 className='text-xl  bg-[#e1edff] p-3 w-2/4 md:w-2/6 rounded-md text-center font-bold text-blue-700'>
                        Sale 70%
                    </h3>
                    <h1 className='text-6xl font-bold text-slate-900 tracking-normal'>
                        An Industrial Take on Streetwear
                    </h1>
                    <h6 className='text-xl lg:pr-16'>
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </h6>
                    <button className='w-full sm:w-2/4 mx-0 md:w-2/5 xl:w-2/6 lg:2/4 bg-slate-900 font-medium text-xl text-white p-3 flex justify-center items-center space-x-3'>
                        <span>
                            <BsCart3 />
                        </span>
                        <span>
                            Start Shopping
                        </span>
                    </button>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                        {heroFeatured.map((featuredItem) => {
                            return (
                                <Image
                                    src={featuredItem}
                                    alt='hero featured items'
                                    key={featuredItem.src}
                                />
                            )
                        })}
                    </div>

                </div>

                {/* right side div */}
                <div className='hidden w-1/2  lg:block'>
                    <div className='mt-10 hero-image-bg  rounded-full w-[550px] h-[550px] bg-[#ffece3]'>
                        <Image
                            src={HeroImage}
                            alt="hero section image"
                        />
                    </div>

                </div>
            </section>
        </Wrapper>
    )
}

export default HeroSection