import React from 'react'
import Wrapper from '../shared/Wrapper'
import Card from '../shared/Card'
import promo1 from '@/app/assets/images/promotions/event1.webp'
import promo2 from '@/app/assets/images/promotions/event2.webp'
import promo3 from '@/app/assets/images/promotions/event3.webp'
import Image from 'next/image'

function PromotionSection() {
  let promotions = [
    {
      image: promo2,
      name: 'Sweat Shirt',
      oldPrice: 100.00,
      salePrice: 75.00

    },
    {
      image: promo3,
      name: 'Push Buttom Bomber',
      oldPrice: 220.00,
      salePrice: 180.00

    }

  ]
  return (
    <Wrapper>
      <div className='lg:flex flex-wrap justify-between h-max space-y-2 w-full'>
        <div className='w-full space-y-4 py-10 text-center'>
          <h4 className='text-md font-bold text-blue-500'>
            PROMOTIONS
          </h4>
          <h2 className='text-4xl font-bold'>
            Our Promotions Events
          </h2>
        </div>

        {/* left side div */}
        <div className='w-full lg:w-[45%] h-92 text-center space-y-2'>
          <div className='h-[49%] w-full bg-gray-400 sm:flex items-center  px-5'>
            <div className='w-full pt-8 sm:pt-0 sm:w-1/2'>
              <h2 className='text-3xl font-bold'>
                GET UP TO 60%
              </h2>
              <p className='text-xl'>
                For the summer season
              </p>
            </div>
            <div className='w-full sm:w-1/2 h-full' >
              <Image
                src={promo1}
                alt='Promotion Image'
                className='object-cover h-'
              />
            </div>
          </div>
          <div className='h-[49%] w-full sm:py-3 bg-[#212121]  text-white flex flex-wrap place-content-center'>

            <h2 className='text-4xl font-bold w-full'>
              GET 30% Off
            </h2>
            <p className='text-xl w-full mt-5'>
              USE PROMO CODE
            </p>
            <p className='mt-2 w-4/5 sm:w-4/6 py-2 text-2xl rounded-md sm:tracking-wide md:tracking-widest bg-slate-700 font-medium'>
              DINEWEEKENDSALE
            </p>

          </div>
        </div>

        {/* right side div */}
        <div className='w-full space-y-4 md:space-y-0 lg:w-[53%] lg:h-92  md:grid grid-cols-2  gap-x-4'>

          {promotions.map((item) => {
            return (
              <div key={item.image.src}>
                <Card items={item} />
              </div>
            )
          })}
        </div>
      </div>

    </Wrapper>
  )
}

export default PromotionSection