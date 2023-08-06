'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/Logo.webp'
import Wrapper from '../../shared/Wrapper'
import { BsCart3 } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import NavLinks from '../../shared/NavLinks'
import Cart from '../Cart/Cart'
import SmallWidth from './SmallWidth'
import Fullwidth from './Fullwidth'




export default function Navbar() {

    let [cartOpen, setCartOpen] = useState(false)

    function cart() {
        setCartOpen(!cartOpen)
    }
    
    return (

        <Wrapper>
            {/* small devices navbar starts */}
            <SmallWidth cartState={cartOpen} cartSetState={setCartOpen} />

            
            {/* full width navbar starts */}
            <Fullwidth cartState={cartOpen} cartSetState={setCartOpen} />
            
        </Wrapper >
    )
}