import React from 'react'
import BackgroundBanner from '../../components/BackgroundBanner'
import DestinationGif from '../../assets/Destinations.gif'
import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.png'
import img5 from './../../assets/img5.png'
import img6 from './../../assets/img6.png'
import bgImg from './../../assets/bgDest.png'

import { ChangableContent } from '../../components/ChangableContent'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'
let topDestinations = [
    {
        id: 0,
        img: img1,
        title: 'International Italy',
        trip: 'SPAIN TRIP',
        date: '34 available trip plans',
        price: '$1299.00'
    },
    {
        id: 1,
        img: img2,
        title: 'International Portugal',
        trip: 'ITALY TRIP',
        date: '54 available trip plans',
        price: '$250.00'
    },
    {
        id: 2,
        img: img3,
        title: 'International Turkiye',
        trip: 'TURKEY TRIP',
        date: '19 available trip plans',
        price: '$400.00'
    },
    {
        id: 3,
        img: img4,
        title: 'International Iceland',
        trip: 'SPAIN TRIP',
        date: '54 available trip plans',
        price: '$1299.00'
    },
    {
        id: 4,
        img: img5,
        title: 'International Costa Rica',
        trip: 'SPAIN TRIP',
        date: '19 available trip plans',
        price: '$1299.00'
    },
    {
        id: 5,
        img: img6,
        title: 'International Argentina',
        trip: 'SPAIN TRIP',
        date: '87 available trip plans',
        price: '$1299.00'
    },

]
function Destianations() {
    return (
        <>
            <div className='container'>
                <BackgroundBanner url={DestinationGif}>
                    <div className='flex flex-col h-full justify-center items-center'>
                        <h1 className='text-white text-5xl font-semibold'>
                            Explore places on Tourista
                        </h1>
                        <p className='text-white font-semibold mt-4'>

                            Destinations
                        </p>
                    </div>
                </BackgroundBanner>
            </div>
            <section className='container flex justify-center gap-6 my-8'>
                <div>
                    <h4 className='text-[#4A21EF] text-[1.75rem] font-bold my-6'>Europe</h4>
                    <ul className='texxt-[#141D24] text-base flex flex-col gap-3'>
                        <li>Azores</li>
                        <li>Croatia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Greece</li>
                        <li>Iceland</li>
                        <li>Ireland</li>
                        <li>Italy</li>
                        <li>Portugal</li>
                        <li>Scotland</li>
                        <li>Spain</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#4A21EF] text-[1.75rem] font-bold my-6'>Asia</h4>
                    <ul className='texxt-[#141D24] text-base flex flex-col gap-3'>
                        <li>Azores</li>
                        <li>Croatia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Greece</li>
                        <li>Iceland</li>
                        <li>Ireland</li>
                        <li>Scotland</li>
                        <li>Spain</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#4A21EF] text-[1.75rem] font-bold my-6'>Africa</h4>
                    <ul className='texxt-[#141D24] text-base flex flex-col gap-3'>
                        <li>Azores</li>
                        <li>Croatia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Greece</li>
                        <li>Iceland</li>
                        <li>Ireland</li>
                        <li>Italy</li>
                        <li>Portugal</li>
                        <li>Spain</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#4A21EF] text-[1.75rem] font-bold my-6'>C/America</h4>
                    <ul className='texxt-[#141D24] text-base flex flex-col gap-3'>
                        <li>Azores</li>
                        <li>Croatia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Greece</li>
                        <li>Iceland</li>
                        <li>Ireland</li>
                        <li>Italy</li>
                        <li>Portugal</li>
                        <li>Scotland</li>
                        <li>Spain</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#4A21EF] text-[1.75rem] font-bold my-6'>S/America</h4>
                    <ul className='texxt-[#141D24] text-base flex flex-col gap-3'>
                        <li>Germany</li>
                        <li>Greece</li>
                        <li>Iceland</li>
                        <li>Ireland</li>
                        <li>Italy</li>
                        <li>Portugal</li>
                        <li>Scotland</li>
                        <li>Spain</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
            </section>
            <section className='container my-10'>
                <ChangableContent heading='Top Destinations' arr={topDestinations} isCountry={true}/>
            </section>
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
            <SignUpBanner />

        </>
    )
}

export default Destianations