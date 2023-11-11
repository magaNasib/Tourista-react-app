import React from 'react'
import './Landing.css'
import { BsSearch } from 'react-icons/bs';
import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.png'
import img5 from './../../assets/img5.png'
import img6 from './../../assets/img6.png'
import callCenter from './../../assets/Callcenter.png'
import girlWithHat from './../../assets/girlwithHat.png'
import bgImg from './../../assets/Image.png'
import { Link } from 'react-router-dom';
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner';
import homeGif from '../../assets/Homepage.gif'
import BackgroundBanner from '../../components/BackgroundBanner';
import { ChangableContent } from '../../components/ChangableContent';

let trendData = [
  {
    id: 0,
    img: img1,
    title: 'Magical Madrid To Marrakech By Train',
    trip: 'SPAIN TRIP',
    date: '12 days',
    price: '$1299.00'
  },
  {
    id: 1,
    img: img2,
    title: 'Spectacular Sicily',
    trip: 'ITALY TRIP',
    date: '5 days',
    price: '$250.00'
  },
  {
    id: 2,
    img: img3,
    title: 'International Istanbul',
    trip: 'TURKEY TRIP',
    date: '7 days',
    price: '$400.00'
  },

]
let brendData = [
  {
    id: 3,
    img: img4,
    title: 'Magical Madrid To Marrakech By Train',
    trip: 'SPAIN TRIP',
    date: '12 days',
    price: '$1299.00'
  },
  {
    id: 4,
    img: img5,
    title: 'Magical Madrid To Marrakech By Train',
    trip: 'SPAIN TRIP',
    date: '12 days',
    price: '$1299.00'
  },
  {
    id: 5,
    img: img6,
    title: 'Magical Madrid To Marrakech By Train',
    trip: 'SPAIN TRIP',
    date: '12 days',
    price: '$1299.00'
  },

]

function Landing() {
  return (
    <>
    
      <div className='container'>
        <BackgroundBanner url={homeGif}>
          <div className='flex flex-col h-full justify-center items-center'>
            <h1 className='text-white text-5xl font-semibold'>
              We create trips you love
            </h1>
            <p className='text-white font-semibold mt-4'>
              Trips you couldn't plan, even if you wanted to.
            </p>
            <div className='mt-14'>
              <input type='text' className='py-3 px-6 rounded-[6.75rem] outline-0 w-[24rem]' placeholder='Where do you want to go?' />
              <button className='p-2 bg-[#4A21EF] rounded-3xl relative -left-10 top-[2px]' >
                <BsSearch />
              </button>
            </div>
          </div>
        </BackgroundBanner>

        <section className='my-20'>
          <ChangableContent heading='Trending now' arr={trendData} save={true} />
        </section>

        <section className='my-20'>
          <ChangableContent heading='Brand new trips' arr={brendData} save={true} />
        </section>
        <section className='my-20'>
          <h3 className='text-center text-[#141D24] font-bold text-4xl my-10'>Why us?</h3>
          <div className='flex gap-6'>
            <div className='flex-1 p-6 flex items-center gap-4 bg-[#F5F7FA] rounded-[1.25rem]'>
              <div className='p-4 bg-[#4A21EF] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_370_6843)">
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
                  <g clip-path="url(#clip0_370_6851)">
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
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9704 22.287C17.111 22.4275 17.3016 22.5064 17.5004 22.5064C17.6991 22.5064 17.8897 22.4275 18.0304 22.287L21.7594 18.558C22.3938 17.9226 22.7501 17.0614 22.7501 16.1635C22.7501 15.2656 22.3938 14.4045 21.7594 13.769C21.2076 13.218 20.4827 12.8741 19.7069 12.7952C18.931 12.7163 18.1518 12.9074 17.5004 13.336C16.849 12.9074 16.0697 12.7163 15.2939 12.7952C14.5181 12.8741 13.7932 13.218 13.2414 13.769C12.6098 14.402 12.2538 15.2588 12.251 16.153C12.2482 17.0471 12.5988 17.9062 13.2264 18.543L16.9704 22.287Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.227 21.6605L11.6561 19.0896C10.9485 18.372 10.5317 17.4178 10.486 16.411C10.4404 15.4042 10.7692 14.4162 11.409 13.6375C11.1795 13.6282 10.9481 13.6235 10.714 13.6235C7.62744 13.6235 4.89487 14.3956 3.19828 15.5524C1.904 16.4351 1.19043 17.5565 1.19043 18.7337V20.081C1.19092 20.4997 1.35749 20.9012 1.6536 21.1973C1.94971 21.4934 2.35119 21.66 2.76995 21.6605H14.227Z" fill="white" />
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
      <section className='my-28 h-[50rem] relative'>
        <img src={bgImg} alt='bg' className='absolute w-full h-full top-0 left-0 object-cover' />

        <div className='absolute right-8 bottom-8 w-[26rem]'>
          <div className='my-2 px-8 py-6 bg-white rounded-2xl'>
            <p className='text-[#141D24]'>
              “Tiago put together an epic itinerary for me
              and my friends. He showed us some hidden
              hiking trails and amazing local food spots.
              He even met us for a coffee to make sure we
              had everything we needed.
            </p>
            <h5 className='text-[#4A21EF] font-bold mt-2'>Thanks Tiago!”</h5>
            <span className='text-[#788795] text-xs my-2 block'>Charlie, rappelling down a 370-foot waterfall</span>
            <p className='text-[#788795] text-xs font-semibold'>The Azores</p>
          </div>
          <div className='my-2 px-8 py-5 bg-white rounded-2xl flex items-center gap-4'>
            <div className='bg-[#4A21EF] rounded-[6rem] p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.4908 5.16365C12.8163 5.16365 13.8908 4.08913 13.8908 2.76365C13.8908 1.43816 12.8163 0.363647 11.4908 0.363647C10.1653 0.363647 9.09082 1.43816 9.09082 2.76365C9.09082 4.08913 10.1653 5.16365 11.4908 5.16365Z" fill="white" />
                <path d="M18.9091 7.81822V7.09095C19.4909 6.94549 19.8909 6.40004 19.8909 5.78186C19.8909 5.05458 19.2727 4.4364 18.5455 4.4364C17.8182 4.4364 17.2 5.05458 17.2 5.78186C17.2 6.40004 17.6364 6.90913 18.1818 7.09095V7.81822H15.9273L13.7818 6.32731C13.1636 5.92731 12.4727 5.67277 11.7455 5.67277H10.9091C10.1091 5.67277 9.38182 6.00004 8.87273 6.54549V6.10913C8.87273 5.49095 8.36364 4.98186 7.74545 4.98186H6.18182C5.56364 4.98186 5.05455 5.49095 5.05455 6.10913V6.94549C4.47273 6.98186 4 7.49095 4 8.07277V13.4546C4 14.0728 4.50909 14.5819 5.12727 14.5819H8.03636C8 14.8 7.96364 15.0182 7.92727 15.2728L7.52727 17.5273C7.49091 17.7091 7.41818 17.8546 7.30909 18L4.47273 21.6L4.43636 21.6364C4.10909 22.2909 4.32727 23.0909 4.98182 23.4182C5.16364 23.5273 5.38182 23.5637 5.6 23.5637C6.07273 23.5637 6.50909 23.3091 6.72727 22.9091L9.81818 18.9091L9.85455 18.8728C9.92727 18.7637 9.96364 18.6182 9.96364 18.5091L10.8364 15.1273L13.5273 19.0546L13.5636 22.3273C13.5636 22.8728 13.8909 23.3455 14.4 23.5273C14.5455 23.6 14.7273 23.6 14.8727 23.6C15.6 23.6 16.1818 23.0182 16.1818 22.2546L16.0364 18.5455C16.0364 18.1819 15.8909 17.8546 15.7091 17.5637C15.0909 16.6909 13.6 14.5455 13.6 14.5455C13.4182 14.2909 13.3091 14 13.3091 13.6728V9.27277L14.1091 9.78186C14.6909 10.1455 15.3818 10.3273 16.0727 10.3273H18.1818V23.2C18.1818 23.3819 18.3273 23.5637 18.5455 23.5637C18.7636 23.5637 18.9091 23.3819 18.9091 23.2V10.3273C19.5273 10.2546 20 9.70913 20 9.09095C20 8.47276 19.5273 7.89095 18.9091 7.81822ZM5.12727 13.8546C4.90909 13.8546 4.72727 13.6728 4.72727 13.4546V12.7273H5.81818C6.03636 12.7273 6.18182 12.5455 6.18182 12.3637C6.18182 12.1819 6.03636 12 5.81818 12H4.72727V11.1637H5.81818C6.03636 11.1637 6.18182 10.9819 6.18182 10.8C6.18182 10.6182 6.03636 10.4364 5.81818 10.4364H4.72727V9.56367H5.81818C6.03636 9.56367 6.18182 9.41822 6.18182 9.20004C6.18182 9.01822 6.03636 8.8364 5.81818 8.8364H4.72727V8.10913C4.72727 7.89095 4.90909 7.70913 5.12727 7.70913H8.10909V13.2728C8.10909 13.4909 8.10909 13.7091 8.07273 13.9273H5.12727V13.8546Z" fill="white" />
              </svg>
            </div>
            <div className='flex-1'>
              <span className='text-[#788795] text-xs my-2 block'>Trip crafted by</span>
              <div className='text-[#141D24] flex justify-between w-full'>
                <span className=' font-semibold'>
                  Tiago
                </span>
                <span>
                  Local expert in Portugal
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className='container'>
        <section className='my-20'>
          <ChangableContent heading='Europe' arr={brendData} save={true} />
        </section>
        <section className='my-20'>
          <ChangableContent heading='Asia' arr={trendData} save={true} />
        </section>

      </div>
      <section className='bg-[#4A21EF] py-[4.5rem]'>
        <div className='flex justify-center items-center gap-4'>
          <p className='text-white font-inter text-2xl'>
            Looking to go elsewhere?
          </p>
          <Link to='/' className='flex items-center gap-2 bg-white py-3 px-6 font-semibold text-[#4A21EF] rounded-3xl'>
            Our destinations
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="#4A21EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
      <section>
        <SignUpBanner />
      </section>
    </>
  )
}

export default Landing