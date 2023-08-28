import React from 'react'
import Image from 'next/image'
import logo from '../../../../../public/Logo.webp'
import Link from 'next/link'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'
import NavLinks from '../../shared/NavLinks'
import Cart from '../Cart/Cart'

type props = {
    cartState: boolean;
    cartSetState: React.Dispatch<React.SetStateAction<boolean>>
}

function Fullwidth(props: props) {
    const handleNavClick = (item: any) => {
        document.getElementsByClassName("border-b-2")[0]?.classList.remove("border-b-2","border-black")
        
        item.classList.add("border-b-2","border-black")
        
    }
    
    return (
        <div id='navBar'
            className='hidden h-24 px-2 font-medium  sticky w-full lg:flex justify-between items-center shadow-md '
        >
            <div>
                <Link href={`/`}>

                    <Image
                        src={logo}
                        alt='logo'
                    />
                </Link>
            </div>
            <Link href={`/components/Products/categories/male`}
                onClick={(e) => { handleNavClick(e.currentTarget) }}
            >
                <NavLinks>
                    Male
                </NavLinks>
            </Link>
            <Link href={'/components/Products/categories/female'}
                onClick={(e) => { handleNavClick(e.currentTarget) }}
            >
                <NavLinks>
                    Female
                </NavLinks>
            </Link>
            <Link href={'/components/Products/categories/kids'}
                onClick={(e) => { handleNavClick(e.currentTarget) }}
            >

                <NavLinks>
                    Kids
                </NavLinks>
            </Link>
            <Link href={'/components/Products'}
                onClick={(e) => { handleNavClick(e.currentTarget) }}
            >

                <NavLinks>
                    All Products
                </NavLinks>
            </Link>


            <div className='flex items-center rounded-md w-1/4 group border-2 border-gray-200 shadow-md text-gray-600 hover:border-b-2 hover:border-b-black'>
                <label htmlFor="searchBar" className=' group-focus-within:text-black h-8 p-1'>
                    <BiSearchAlt2 className='text-2xl h-8' />
                </label>
                <input type="search" name="searchBar" placeholder='looking for something else' id="searchBar" className='focus-visible:border-none w-full h-8 p-2' />
            </div>
            <div>
                <button
                    onClick={() => { props.cartSetState(!props.cartState) }}
                    className='hover:scale-110 transition-transform p-3 m-0 rounded-full bg-gray-100 text-gray-800 hover:text-black '>
                    <BsCart3 className='text-xl' />

                </button>
                {
                    props.cartState &&
                    <Cart currentOpenState={props.cartState} openStateFunction={props.cartSetState} />
                }

            </div>

        </div>
    )
}

export default Fullwidth