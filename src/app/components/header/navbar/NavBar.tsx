'use client'

import React, { useState } from 'react'
import Wrapper from '../../shared/Wrapper'
import SmallWidth from './SmallWidth'
import Fullwidth from './Fullwidth'

export default function Navbar() {

    let [cartOpen, setCartOpen] = useState(false)    
    
    return (

        <Wrapper>
            {/* small devices navbar starts */}
            <SmallWidth cartState={cartOpen} cartSetState={setCartOpen} />

            
            {/* full width navbar starts */}
            <Fullwidth cartState={cartOpen} cartSetState={setCartOpen} />
            
        </Wrapper >
    )
}