'use client'
import { useEffect, useState } from 'react'
import { getProductDetails } from '@/lib/getProductDetails'
import Wrapper from '../../shared/Wrapper'
import { urlForImage } from '../../../../../sanity/lib/image'
import Image from 'next/image'
import { BsCart3 } from 'react-icons/bs'
import { productInterface } from '../page'
import { cookies } from 'next/dist/client/components/headers'


export default function Page() {
  
  const initialQuantity = {
    count: 1,
  };

  const [quantity, setQuantity] = useState(initialQuantity);
  const [product, setProduct] = useState<productInterface>()
  const [size, setSize] = useState('sm')

  useEffect(() => {
    let url = document.URL.split("/")
    let productId = url.pop() as string;
    getProductDetails(productId).then((res) => {
      setProduct(res[0])
    })
  }, [])
  
  const handleAddToCart = async () =>{
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        quantity : quantity.count,
        product_id: product?._id,
        size : size,
        price : product?.price
      })
    })
    const result = await res.json()
    alert(`item added successfully` )

    // cookies().set("user_name","huxaifa")
    // console.log("handle cart funtion response .....................",cookies().set("name" , 'huzaifa'))

  }
  const increment = () => {
    setQuantity({ count: quantity.count + 1 });
  };

  const decrement = () => {
    if (quantity.count > 0) {
      quantity.count > 1 && setQuantity({ count: quantity.count - 1 });
      document.getElementById("incButton")?.removeAttribute('disabled')
    }
    else {
      document.getElementById("decButton")?.setAttribute('disabled', 'true')
    }
  };

  function sizeSelection(event: React.MouseEvent<HTMLButtonElement>) {
    let allSizeButtons = document.querySelectorAll("button")
    let selectedSize = event.currentTarget.innerText
    allSizeButtons.forEach(element => {
      element.classList.remove('bg-gray-100', 'shadow-md', 'shadow-black')
    });
    event.currentTarget.classList.add('bg-gray-100', 'shadow-md', 'shadow-black')
    setSize(selectedSize)
    console.log(size)
  }

  if (product)
    return (
      <Wrapper>
        <div className='lg:grid grid-cols-2 mt-6'>

          {/* left side div */}
          <div className=' p-2 '>
            <div className='w-full flex justify-around p-2'>
              <div className='w-28 h-28'>
                <Image
                  src={urlForImage(product.image).url()}
                  alt='product image'
                  height={120}
                  width={120}
                  className='hover:bg-gray-300'
                />
              </div>
              <div className='w-28 h-28 '>
                <Image
                  src={urlForImage(product.image).url()}
                  alt='product image'
                  height={120}
                  width={120}
                  className='hover:bg-gray-300'
                />
              </div>
              <div className='w-28 h-28 '>
                <Image
                  src={urlForImage(product.image).url()}
                  alt='product image'
                  height={120}
                  width={120}
                  className='hover:bg-gray-300'

                />
              </div>
            </div>
            <div className='mt-5 w-full'>
              <Image
                src={urlForImage(product.image).url()}
                width={500}
                height={500}
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
              <div className='space-y-3'>
                <h2 className='text-xl font-bold'>
                  Select Size
                </h2>
                <ul className='flex justify-around '>
                  <li>
                    <button className='bg-gray-10 shadow-md shadow-black size-btn w-10 h-10 rounded-full'
                      onClick={(e) => {
                        sizeSelection(e)
                      }}
                    >
                      SM
                    </button>
                  </li>
                  <li>
                    <button className='size-btn w-10 h-10 rounded-full'
                      onClick={(e) => {
                        sizeSelection(e)
                      }}>
                      MD
                    </button>
                  </li>
                  <li>
                    <button className='size-btn w-10 h-10 rounded-full'
                      onClick={(e) => {
                        sizeSelection(e)
                      }}>
                      LG
                    </button>
                  </li>
                </ul>

              </div>
              <div className='flex items-center space-x-8'>
                <h2 className='text-xl font-bold'>
                  Quantity:
                </h2>
                <div className='flex space-x-5'>
                  <button id="decButton" onClick={decrement} className='font-bold text-md w-7 h-7 rounded-full shadow-xl'>-</button>
                  <p>{quantity.count}</p>
                  <button id="incButton" onClick={increment} className='font-bold text-md w-7 h-7 rounded-full shadow-xl'>+</button>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <button onClick={handleAddToCart} className='w-3/5 mx-0 md:w-2/4 lg:2/4 bg-slate-900 font-medium text-lg text-white p-3 flex justify-center items-center space-x-3'>
                  <span>
                    <BsCart3 />
                  </span>
                  <span>
                    Add To Cart
                  </span>
                </button>
                <h2 className='text-2xl md:text-4xl font-bold'>
                  {product.price} Rs
                </h2>
              </div>
            </div>
          </div>
        </div>

      </Wrapper>
    )
}
