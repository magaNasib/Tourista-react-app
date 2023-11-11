import React from 'react'
import Logo from '../../assets/Logo'

function Footer() {
  return (
    <div className='bg-[#F5F7FA] text-[.875rem] p-16 text-[#3A4D5A] leading-8'>
      <div className='container flex gap-16 justify-center items-center'>
        <div>
          <Logo className='mb-4'/>
          <p className='.875rem'>
            Discover the world's wonders and let us be
            </p>

            your trusted guide to extraordinary destinations.
            <p>
          </p>
          <p className='text-[.75rem] mt-4'>
            © Copyright 2023 Tourista Ltd. All Rights Reserved.
          </p>
        </div>
        <div>
          <h4 className='text-base font-semibold mb-4'>
            Menu
          </h4>
          <ul className=''>
            <li>
              Destinations
            </li>
            <li>
              Private trips
            </li>
            <li>
              Blog
            </li>
            <li>
              About us
            </li>
          </ul>
        </div>
        <div>
        <h4 className='text-base font-semibold mb-4'>
            Menu
          </h4>
          <ul>
            <li>
              Destinations
            </li>
            <li>
              Private trips
            </li>
            <li>
              Blog
            </li>
            <li>
              About us
            </li>
          </ul>
        </div>
        <div>
        <h4 className='text-base font-semibold mb-4'>
            Menu
          </h4>
          <ul>
            <li>
              Destinations
            </li>
            <li>
              Private trips
            </li>
            <li>
              Blog
            </li>
            <li>
              About us
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer