import close from '@/lib/close'
import { getProductDetails } from '@/lib/getProductDetails'
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { productInterface } from '../../Products/page' 
import { urlForImage } from '../../../../../sanity/lib/image' 
import Image from 'next/image'

interface props {
  item: string | undefined,
  state: boolean,
  setState: any
}

function CartItemDetails(props: props) {
  const [product,setProduct] = useState<productInterface>()
  React.useEffect(()=>{
    getProductDetails(props.item!).then((res) => {
      console.log(res)
      setProduct(res[0])
    })
  },[])

  
  return (
    <div id='cart' className='p-2 w-full  h-screen absolute top-0 bg-black bg-opacity-90 '>
      <div className='w-full'>
        <button className='bg-white' onClick={() => { props.setState(!props.state) }}>
          <GrFormClose className=' text-3xl' />
        </button>
      </div>
      {product ? 
      <div className='w-full h-[90%] flex flex-wrap place-content-center'>
        <div className='w-4/5 h-4/5  bg-white'>
          <div className='h-full lg:grid grid-cols-2'>

            {/* left side div */}
            <div className='h-full p-1'>
              <div className='h-1/5 p-2 w-full flex justify-around '>
                <div className='w-16 h-16'>
                  <Image
                    src={urlForImage(product.image).url()}
                    alt='product image'
                    height={120}
                    width={120}
                    className='hover:bg-gray-300'
                  />
                </div>
                <div className='w-16 h-16 '>
                  <Image
                    src={urlForImage(product.image).url()}
                    alt='product image'
                    height={120}
                    width={120}
                    className='hover:bg-gray-300'
                  />
                </div>
                <div className='w-16 h-16 '>
                  <Image
                    src={urlForImage(product.image).url()}
                    alt='product image'
                    height={120}
                    width={120}
                    className='hover:bg-gray-300'

                  />
                </div>
              </div>
              <div className='h-4/5 w-full'>
                <Image
                  src={urlForImage(product.image).url()}
                  width={300}
                  height={300}
                  alt='product image'
                  className='mx-auto'
                />
              </div>
            </div>

            {/* right side div */}
            <div className="flex  place-content-center ">
              <div className="space-y-10 pt-16 w-4/5 ">
                <div className='space-y-3'>
                  <div className='md:text-5xl text-4xl space-y-5 font-medium items-center'>
                    <h1>
                      {product.title}
                      {/* sweat shirt pant shirt name */}
                    </h1>

                    <p className='w-full md:text-2xl text-xl text-gray-500 '>
                      {product.description}
                    </p>
                  </div>

                </div>

                <div className='flex justify-between items-center'>
                  <h2 className='text-2xl md:text-4xl font-bold'>
                    {product.price} Rs
                  </h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> : 
      <h1>error</h1>
      }
      
    </div>
  )
}

export default CartItemDetails