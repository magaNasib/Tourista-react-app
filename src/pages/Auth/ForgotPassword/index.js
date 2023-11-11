import React from 'react'

import { Link } from 'react-router-dom';
import bgImg from '../../../assets/Image placeholder.png';
import Logo from '../../../assets/Logo.png';
function ForgotPassword() {
    return (
        <div className='flex min-h-screen'>
            <div className='w-[50%]'>
                <img src={bgImg} className='object-cover' alt="background" />
            </div>
            <div className='w-[50%] px-[6.5rem] py-4 relative'>

                <Link className='absolute left-8 top-8' to='/login'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M22.5 28.5L12 18L22.5 7.5" stroke="#141D24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
                <div className="flex items-center justify-center p-4">

                    <Link to={'/'}>
                        <img src={Logo} alt="" />

                    </Link>
                </div>


                <div className='mt-[4rem] text-[#141D24]'>
                    <form action="/">
                        <h4 className='mt-9 text-2xl font-semibold'>Looking to change your password?</h4>
                        <p className='text-[#97A5B2] mt-2 text-base'>
                        Enter your email below and we'll send you instructions on how to reset your password.
                        </p>
                        <div className='flex flex-col gap-3 my-4'>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" className='outline-none border px-4 py-3 rounded-[.625rem] border-[#E3E7EB]' placeholder='someone@example.com' id="email" />
                        </div>

                        <div className='mt-8'>
                            <button type="submit" className='w-full py-3 px-4 bg-[#4A21EF] rounded-3xl text-white font-semibold'>
                            Reset my password
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword