import close from '@/lib/close'
import { getProductDetails } from '@/lib/getProductDetails'
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { productInterface } from '../../Products/page'
import { urlForImage } from '../../../../../sanity/lib/image'
import Image from 'next/image'
import { cart, fetchCartDataFromAPI } from './Cart'
import { toast } from 'react-hot-toast'
import { Router, useRouter } from 'next/router'
import { data } from '../../data'

interface props {
  cartState: cart[] | undefined,
  cartSetState: any,
  item: cart | undefined,
  state: boolean,
  setState: any
}

function CartItemDetails(props: props) {
  const { item } = props
  const initialQuantity = {
    count: item!.quantity,
  };

  const [quantity, setQuantity] = useState(initialQuantity);
  const [size, setSize] = useState<string>(item!.size)
  const [product, setProduct] = useState<productInterface>()
  const [SaveEdit, setSaveEdit] = useState<boolean>(false)
  const [productImage, setProductImage] = useState(product?.image)


  const increment = () => {
    setQuantity({ count: quantity.count + 1 });
    setSaveEdit(true)
  };

  const decrement = () => {
    setSaveEdit(true)
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
    setSaveEdit(true)
  }


  React.useEffect(() => {
    getProductDetails(item!.product_id.toString()).then((res) => {
      setProduct(res[0])
    })
    document.getElementById(item!.size.toLocaleLowerCase())?.classList.add('bg-gray-100', 'shadow-md', 'shadow-black')

  }, [])
  let updateItem = async () => {
    const res = await fetch(`/api/cart/${item!.id}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: quantity.count,
        size: size,
      })

    })
    if (res.ok) {
      props.setState(!props.state)
      fetchCartDataFromAPI().then(({ res }) => {
        if (res) props.cartSetState(res)
      }).catch((err) => { console.log(err) })
      return true
    }

    else {
      throw new Error("failed to adding item to cart")
    }

  }
  let handleUpdate = async () => {
    toast.promise(updateItem(), {
      loading: "Updating .....",
      success: "Updated Successfully",
      error: "error in updating"
    })
  }

  return (
    <div id='cart' className='p-2 w-full  min-h-screen max-h-max absolute top-0 bg-black bg-opacity-90 '>
      <div className='w-full'>
        <button className='bg-white' onClick={() => { props.setState(!props.state) }}>
          <GrFormClose className=' text-3xl' />
        </button>
      </div>
      {product ?
        <div className='w-full  flex flex-wrap place-content-center'>
          <div className='w-11/12 sm:w-4/5 md:3/4   h-4/5 max-h-max py-5  bg-white'>
            <div className='h-full lg:grid grid-cols-2'>

              {/* left side div */}
              <div className='h-full p-1'>
                <div className='h-1/5 p-2 w-full flex justify-around '>

                  {
                    product.moreImages &&
                    product.moreImages.map((i: any) => {
                      return (
                        <div
                          key={i.asset.reference}
                          onMouseOut={() => { setProductImage(product.image) }}
                          onMouseOver={() => { setProductImage(i) }}
                          className='w-16 h-16'
                        >
                          <Image
                            src={urlForImage(i).url()}
                            alt='product image'
                            height={120}
                            width={120}
                            className='hover:bg-gray-300'
                          />
                        </div>
                      )
                    })
                  }

                </div>
                <div className='h-4/5 w-full'>
                  <Image
                    src={urlForImage(productImage || product.image).url()}
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
                  <div className='space-y-3'>
                    <h2 className='text-xl font-bold'>
                      Select Size
                    </h2>
                    <ul className='flex justify-around '>
                      <li>
                        <button id='sm' className='size-btn w-10 h-10 rounded-full'
                          onClick={(e) => {
                            sizeSelection(e)
                          }}
                        >
                          SM
                        </button>
                      </li>
                      <li>
                        <button id='md' className='size-btn w-10 h-10 rounded-full'
                          onClick={(e) => {
                            sizeSelection(e)
                          }}>
                          MD
                        </button>
                      </li>
                      <li>
                        <button id='lg' className='size-btn w-10 h-10 rounded-full'
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
                  <div>
                    {SaveEdit &&
                      <button onClick={handleUpdate} className='w-4/5 mx-0 md:w-3/4 lg:3/4 bg-slate-900 font-medium text-lg text-white p-3 flex justify-center items-center space-x-3'>
                        <span>

                        </span>
                        <span>
                          Update Item
                        </span>
                      </button>}
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