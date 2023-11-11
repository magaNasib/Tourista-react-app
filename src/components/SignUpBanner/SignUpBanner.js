import React from 'react'

function SignUpBanner() {
    return (
        <div className='w-[50%] mx-auto flex flex-col items-center text-center my-12'>
            <h2 className='my-4 font-bold text-2xl'>Join our travel revolution</h2>
            <p className='my-4'>Sign up to stay in the know - hot new travel spots,
                how we strive to make the world a better place, and all sorts of surprises.</p>
            <div className='mt-14 p-2 border rounded-[6.75rem] w-[24.5rem] flex'>
                <input type='text' className='flex-1 outline-0' placeholder='Email' />
                <button className='py-2 px-4  bg-[#4A21EF] text-white font-semibold rounded-3xl' >
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default SignUpBanner