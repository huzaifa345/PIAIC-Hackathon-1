import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/Logo.webp'
import Wrapper from '../shared/Wrapper'
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { AiOutlineCopyright } from 'react-icons/ai'
import Link from 'next/link'

function Footer() {
  return (
    <>
      <Wrapper>
        <footer className='h-max lg:h-screen w-full border-t-2  border-t-black flex flex-wrap pt-24 mt-8'>

          <div className='lg:grid grid-cols-4 gap-2 w-full h-max space-y-6 lg:h-3/4 lg:space-y-0'>
            <div className='space-y-8 lg:h-full h-max'>
              <Link href={`/`}>
                <Image
                  alt='Dinemart logo'
                  src={logo}
                  width={180}
                />
              </Link>


              <p className='text-xl p-2'>
                Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
              </p>
              <div className='flex space-x-5 py-4'>
                <BsTwitter className='w-10 h-10 text-2xl rounded-lg p-2 bg-gray-200' />
                <BsFacebook className='w-10 h-10 text-2xl rounded-lg p-2 bg-gray-200' />
                <BsLinkedin className='w-10 h-10 text-2xl rounded-lg p-2 bg-gray-200' />
              </div>
            </div>
            <ul className='space-y-3 lg:h-full h-max' >
              <li>
                <h3 className='footer-links-heading'>
                  Company
                </h3>
              </li>
              <li>
                About
              </li>
              <li>
                Terms Of Use
              </li>
              <li>
                Privacy
              </li>
              <li>
                How It Works
              </li>
              <li>
                Contact Us
              </li>
            </ul>
            <ul className='space-y-3 lg:h-full h-max' >
              <li>
                <h3 className='footer-links-heading'>
                  Support
                </h3>
              </li>
              <li>
                Support Carrer
              </li>
              <li>
                24h Service
              </li>
              <li>
                Quick Chat
              </li>
            </ul>

            <ul className='space-y-3 lg:h-full h-max' >
              <li>
                <h3 className='footer-links-heading'>
                  Contact
                </h3>
              </li>
              <li>
                WhatsApp
              </li>
              <li>
                Support 24th
              </li>
            </ul>
          </div>

        </footer>

      </Wrapper>
      <div className='mt-8 lg:mt-0 w-full border-t-2 text-center border-t-black space-y-3 lg:space-y-0 lg:grid grid-cols-3 gap-3 py-5 text-lg'>
        <div className='flex items-center justify-center'>
          <p>Copyright</p>  <AiOutlineCopyright className='mx-1' />  <p>2023 Dine Market</p>
        </div>
        <div className='flex items-center justify-center'>
          <p>design by</p> <b className='px-1'> Weird Design Studio </b>
        </div>
        <div className='flex items-center justify-center '>
          <p>Code By</p>
          <Link className='flex items-center justify-center' href={'https://github.com/huzaifa345/PIAIC-Hackathon-1'} target='_blank'>
            <BsGithub className='w-10 h-10 text-2xl rounded-lg p-2' />
            <b>Huzaifa Jawed</b>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Footer