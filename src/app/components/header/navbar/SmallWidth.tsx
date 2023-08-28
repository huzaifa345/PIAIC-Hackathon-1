import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import NavLinks from '../../shared/NavLinks'
import Cart from '../Cart/Cart'
import Image from 'next/image'
import logo from '../../../../../public/Logo.webp'
import close from '@/lib/close'

type props = {
    cartState: boolean;
    cartSetState: React.Dispatch<React.SetStateAction<boolean>>
}

function SmallWidth(props: props) {
    let [sideNavOpen, setSideNavOpen] = useState(false)
    return (

        <div id='navBar' className='sticky top-0 lg:hidden w-full text-white h-24'>
            <div className='flex justify-between flex-wrap items-center shadow-md p-6 '>
                <div>
                    <Link href={`/`}>
                        <Image
                            src={logo}
                            alt='logo'
                        />
                    </Link>
                </div>

                {/*  navbar open / close button */}
                {
                    sideNavOpen ?
                        <div>
                            <button className=' p-2 shadow-md' onClick={() => { close("sideNav", setSideNavOpen, sideNavOpen) }}>
                                <AiOutlineMenuFold className='text-black text-2xl' />

                            </button>
                        </div>
                        :
                        <div className='w-10'>
                            <button onClick={() => { setSideNavOpen(!sideNavOpen) }} className='p-3 shadow-md'>
                                <AiOutlineMenuUnfold className='text-black text-2xl' />

                            </button>
                        </div>
                }
            </div>

            {
                sideNavOpen &&
                //  Drawer
                <div id='sideNav' className='bg-white border mt-[.5] w-full width-animations shadow-2xl lg:text-xl h-[100vh-6rem] max-h-screen'
                >

                    <div className=' text-center text-gray-900 py-30 w-full h-fit order-last mt-10'>
                        <div className='p-3 hover:scale-110 transition-transform'>
                            <button
                                onClick={() => {
                                    close("sideNav", setSideNavOpen, sideNavOpen)
                                    props.cartSetState(!props.cartState)

                                }}
                                className='p-3 m-0 rounded-full bg-gray-100'
                            >
                                <BsCart3 className='text-xl' />
                            </button>
                        </div>

                        <div className='w3/4 md:w-1/4 mx-auto font-medium'>
                            <NavLinks>
                                <Link href={'/components/Products/categories/male'} onClick={() => { close("sideNav", setSideNavOpen, sideNavOpen) }}>
                                    Male
                                </Link>
                            </NavLinks>
                            <NavLinks>
                                <Link href={'/components/Products/categories/female'} onClick={() => { close("sideNav", setSideNavOpen, sideNavOpen) }}>
                                    Female
                                </Link>
                            </NavLinks>
                            <NavLinks>
                                <Link href={'/components/Products/categories/kids'} onClick={() => { close("sideNav", setSideNavOpen, sideNavOpen) }}>
                                    Kids
                                </Link>
                            </NavLinks>
                            <NavLinks>
                                <Link href={'/components/Products'} onClick={() => { close("sideNav", setSideNavOpen, sideNavOpen) }}>
                                    All Products
                                </Link>
                            </NavLinks>
                        </div>
                    </div>
                </div>
            }

            {
                props.cartState &&
                <Cart currentOpenState={props.cartState} openStateFunction={props.cartSetState} />
            }
        </div>

    )
}

export default SmallWidth;