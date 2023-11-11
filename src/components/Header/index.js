import React from 'react'
import { MdUnfoldMore } from 'react-icons/md';
import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>

      <div className='p-3 bg-[#F5F7FA] text-[.875rem] text-[#141D24]'>
        <div className='container flex items-center justify-between '>

          <ul className='flex gap-4 items-center'>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li><Link>Contact us</Link></li>
          </ul>
          <div>
            <span className='flex items-center gap-1 cursor-pointer'>US$ <MdUnfoldMore className='text-lg' /></span>
          </div>
        </div>
      </div>
      <div className='container py-3'>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-3'>
            <li>
              <Link to={'/destinations'}>Destinations</Link>
            </li>
            <li>

              <Link to={'/'}>Private trips</Link>
            </li>
          </ul>
          <div>
            <Logo />
          </div>
          <div>
            <button className='bg-[#4A21EF] rounded-full px-[1.5rem] py-[0.75rem] text-white mr-4'>
              I'm Feeling Lucky
            </button>
            <button className='border-[#4A21EF] border rounded-full px-[1.5rem] py-[0.75rem] text-[#4A21EF]'>

              <Link to={'/login'}>
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header