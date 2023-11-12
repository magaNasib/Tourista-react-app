import React from 'react'
import BackgroundBanner from '../../components/BackgroundBanner'
import alpha from '../../assets/bgGirl.png'
import callCenter from './../../assets/Callcenter.png'
import girlWithHat from './../../assets/girlwithHat.png'
import { Link } from 'react-router-dom'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'
function About() {
  return (
    <>
      <div className='container'>
        <BackgroundBanner className='h-[24rem]' url={alpha}>
          <div className='flex flex-col w-[34rem] mx-auto text-center h-full justify-center items-center'>
            <h1 className='text-white text-5xl font-semibold'>
              About us          </h1>
            <p className='text-white font-semibold mt-4'>
              Discover Our Passion for Travel and Adventure.
            </p>
          </div>

        </BackgroundBanner>

        <div className='py-[7.5rem] w-[39rem] text-[#141D24] mx-auto'>
          <h2 className='text-[2rem] font-bold my-4 text-center'>Changing how the world travels</h2>
          <p>We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination. With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.</p>
        </div>

        <section className='mb-20'>
          <h3 className='text-center text-[#141D24] font-bold text-4xl my-10'>Why us?</h3>
          <div className='flex gap-6'>
            <div className='flex-1 p-6 flex items-center gap-4 bg-[#F5F7FA] rounded-[1.25rem]'>
              <div className='p-4 bg-[#4A21EF] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_370_6843)">
                    <path d="M18.75 -0.149902C15.855 -0.149902 13.5 2.2051 13.5 5.1001C13.5 7.7941 17.712 12.5656 18.192 13.1011C18.3345 13.2586 18.537 13.3501 18.75 13.3501C18.963 13.3501 19.1655 13.2586 19.308 13.1011C19.788 12.5656 24 7.7941 24 5.1001C24 2.2051 21.645 -0.149902 18.75 -0.149902ZM18.75 7.3501C17.508 7.3501 16.5 6.3421 16.5 5.1001C16.5 3.8581 17.508 2.8501 18.75 2.8501C19.992 2.8501 21 3.8581 21 5.1001C21 6.3421 19.992 7.3501 18.75 7.3501ZM0.471 8.6611C0.331909 8.71717 0.212752 8.81353 0.128826 8.93781C0.044901 9.0621 3.89035e-05 9.20863 0 9.3586L0 23.1001C0 23.3491 0.1245 23.5816 0.33 23.7211C0.456 23.8051 0.6015 23.8501 0.75 23.8501C0.8445 23.8501 0.939 23.8321 1.029 23.7961L7.5 21.2071V5.8501L0.471 8.6611Z" fill="white" />
                    <path d="M20.424 14.1031C19.998 14.5771 19.3875 14.8501 18.75 14.8501C18.1125 14.8501 17.502 14.5771 17.076 14.1031C16.923 13.9336 16.7265 13.7101 16.5 13.4446V23.8501L23.529 21.0391C23.814 20.9266 24 20.6491 24 20.3431V9.3166C22.7715 11.3971 21.129 13.3171 20.424 14.1031ZM12.4725 7.2391L9 5.8501V21.2071L15 23.6071V11.5621C14.0415 10.2706 13.041 8.7151 12.4725 7.2391Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_370_6843">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className='text-[#141D24] font-semibold'>
                More than 149 travel titles currently in print
              </p>
            </div>
            <div className='flex-1 p-6 flex items-center gap-4 bg-[#F5F7FA] rounded-[1.25rem]'>
              <div className='p-4 bg-[#4A21EF] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_370_6851)">
                    <path d="M11.1674 6.63483H9.97617V0.685172C9.97617 0.306797 9.66877 0 9.28955 0H4.49494C4.11572 0 3.80831 0.306797 3.80831 0.685172V6.63483H2.61713C1.17403 6.63483 0 7.80637 0 9.24647V21.3836C0 22.8237 1.17403 23.9953 2.61713 23.9953H6.59344C5.90555 23.236 5.48602 22.23 5.48602 21.1279V13.4621C5.48602 11.103 7.40798 9.18366 9.77039 9.18366H11.0871V8.41083C11.0871 7.73339 11.4065 7.1295 11.9022 6.7402C11.6635 6.6703 11.4161 6.63482 11.1674 6.63483ZM5.18156 6.63483V1.37039H8.60292V6.63483H5.18156Z" fill="white" />
                    <path d="M21.1222 10.59H18.3993V8.41087C18.3993 8.01427 18.0771 7.69275 17.6797 7.69275H13.2133C12.8159 7.69275 12.4937 8.01427 12.4937 8.41087V10.59H9.7707C8.1837 10.59 6.89258 11.8784 6.89258 13.4621V18.0037H24.0004V13.4621C24.0004 11.8784 22.7093 10.59 21.1222 10.59ZM13.933 9.129H16.9601V10.59H13.933V9.129ZM6.89267 21.1279C6.89267 22.7116 8.1838 24 9.7708 24H21.1223C22.7093 24 24.0004 22.7116 24.0004 21.1279V19.4399H6.89267V21.1279Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_370_6851">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className='text-[#141D24] font-semibold'>
                More than 149 travel titles currently in print
              </p>
            </div>
            <div className='flex-1 p-6 flex items-center gap-4 bg-[#F5F7FA] rounded-[1.25rem]'>
              <div className='p-4 bg-[#4A21EF] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.7733 11.4473C14.5956 11.4473 16.8835 9.15937 16.8835 6.33708C16.8835 3.51479 14.5956 1.22687 11.7733 1.22687C8.95101 1.22687 6.66309 3.51479 6.66309 6.33708C6.66309 9.15937 8.95101 11.4473 11.7733 11.4473Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.9704 22.287C17.111 22.4275 17.3016 22.5064 17.5004 22.5064C17.6991 22.5064 17.8897 22.4275 18.0304 22.287L21.7594 18.558C22.3938 17.9226 22.7501 17.0614 22.7501 16.1635C22.7501 15.2656 22.3938 14.4045 21.7594 13.769C21.2076 13.218 20.4827 12.8741 19.7069 12.7952C18.931 12.7163 18.1518 12.9074 17.5004 13.336C16.849 12.9074 16.0697 12.7163 15.2939 12.7952C14.5181 12.8741 13.7932 13.218 13.2414 13.769C12.6098 14.402 12.2538 15.2588 12.251 16.153C12.2482 17.0471 12.5988 17.9062 13.2264 18.543L16.9704 22.287Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.227 21.6605L11.6561 19.0896C10.9485 18.372 10.5317 17.4178 10.486 16.411C10.4404 15.4042 10.7692 14.4162 11.409 13.6375C11.1795 13.6282 10.9481 13.6235 10.714 13.6235C7.62744 13.6235 4.89487 14.3956 3.19828 15.5524C1.904 16.4351 1.19043 17.5565 1.19043 18.7337V20.081C1.19092 20.4997 1.35749 20.9012 1.6536 21.1973C1.94971 21.4934 2.35119 21.66 2.76995 21.6605H14.227Z" fill="white" />
                </svg>
              </div>
              <p className='text-[#141D24] font-semibold'>
                More than 149 travel titles currently in print
              </p>
            </div>
          </div>
        </section>

        <section className='my-20'>
          <h3 className='text-center text-[#141D24] font-bold text-4xl my-10'>Our Local Experts</h3>
          <div className='flex relative'>
            <div className='absolute top-[35%] z-20'>
              <svg xmlns="http://www.w3.org/2000/svg" width="268" height="114" viewBox="0 0 268 114" fill="none">
                <path d="M0 13.9413V100.059C0 107.756 6.30362 114 14.0751 114H235.697C243.469 114 249.772 107.756 249.772 100.059V31.9057C249.772 30.9198 250.044 29.9638 250.567 29.1174L267.909 0.926101C268.161 0.51782 267.859 0 267.386 0H14.0751C6.30362 0 0 6.24371 0 13.9413Z" fill="white" />

              </svg>
              <p className='absolute top-[50%] left-[30%] -translate-x-[25%] -translate-y-[50%] font-semibold'>Why trust Gary in Florida to
                plan your trip to South Africa?</p>
            </div>
            <div className='absolute top-[75%] right-0 z-20'>
              <svg xmlns="http://www.w3.org/2000/svg" width="268" height="88" viewBox="0 0 268 88" fill="none">
                <path d="M268 10.7617V77.2383C268 83.1803 263.248 88 257.389 88H24.3535C18.4945 88 13.7421 83.1803 13.7421 77.2383V24.6289C13.7421 23.8679 13.5374 23.13 13.1433 22.4766L0.0684553 0.714885C-0.121035 0.39972 0.106353 0 0.462595 0H257.381C263.24 0 267.992 4.81971 267.992 10.7617H268Z" fill="white" />
              </svg>
              <p className='absolute top-[50%] left-[30%] -translate-x-[20%] -translate-y-[50%] font-semibold'>Why trust Gary When Angela in
                Johannesburg knows best.</p>
            </div>
            <div className='left-clip relative left-[4.5rem] '>

              <img src={callCenter} alt='callCenter' className='w-full' />
            </div>
            <div className='right-clip relative right-[4.5rem] top-[2.75rem]'>
              <img src={girlWithHat} alt='girl' className='w-full' />

            </div>
          </div>
        </section>

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

        <SignUpBanner/>
      </div>
    </>
  )
}

export default About