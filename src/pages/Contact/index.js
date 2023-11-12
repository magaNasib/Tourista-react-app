import React from 'react'
import BackgroundBanner from '../../components/BackgroundBanner'
import bgContact from '../../assets/bgContact.png'
import { Link } from 'react-router-dom'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'

function Contact() {
  return (

    <>
      <div className="container">
        <BackgroundBanner className='h-[24rem]' url={bgContact}>
        </BackgroundBanner>

      </div>

      <div className="container p-12 px-20 flex text-[#141D24]">
          <div className='flex-1'>
              <h2 className='text-[1.75rem] font-medium'>Commercial Contacts</h2>
              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <div className='py-6'>
                <p>Send your request to republish Tourista content:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
          </div>
          <div className='flex-1'>
              <h2 className='text-[1.75rem] font-medium'>Content Contact</h2>
              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <h2 className='text-[1.75rem] font-medium'>Press Contact</h2>

              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
              <h2 className='text-[1.75rem] font-medium'>Partnership Contact</h2>

              <div className='py-6'>
                <p>To advertise on Tourista:</p>
                <p className='text-[#4A21EF]'>advertise@tourista.com</p>
              </div>
          </div>
      </div>
      <section className='bg-[#4A21EF] my-[6rem] py-[4.5rem]'>
        <div className='flex justify-center items-center gap-4'>
          <p className='text-white font-inter text-2xl'>
            Looking to go elsewhere?
          </p>

          <Link to='/' className='flex items-center gap-2 bg-white py-3 px-6 font-semibold text-[#4A21EF] rounded-3xl'>
            Our destinations
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="#4A21EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>


      <div className="container">

        <SignUpBanner />
      </div>
    </>
  )
}

export default Contact