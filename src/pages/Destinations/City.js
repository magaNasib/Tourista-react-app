import React from 'react'
import { Link, useParams } from 'react-router-dom';
import BackgroundBanner from '../../components/BackgroundBanner';
import bgRoma from '../../assets/Roma.png'

function City() {
  const { city } = useParams();
  return (
    <div className='container'>
      <BackgroundBanner url={bgRoma}>

        <div className='flex flex-col w-[34rem] mx-auto text-center h-full justify-center items-center'>
          <h1 className='text-white text-5xl font-semibold'>
            {city}
          </h1>
          <p className='text-white font-semibold mt-4'>
            Eat your way across this southern Italian region, from whitewashed
            hill towns to sparkling blue sea.
          </p>
          <div className='text-white my-8 flex gap-4 justify-center items-center'>
            <Link className='px-6 py-3 bg-[#4A21EF] rounded-[6.25rem]'>
              Create a trip</Link>
              <Link className='px-6 py-3 bg-[#4A21EF] rounded-[6.25rem]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.23656 11.1183C7.40513 10.7818 7.5 10.402 7.5 10C7.5 9.59803 7.40513 9.21821 7.23656 8.88172M7.23656 11.1183C6.82611 11.9376 5.97874 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C5.97874 7.5 6.82611 8.06243 7.23656 8.88172M7.23656 11.1183L12.7634 13.8817M7.23656 8.88172L12.7634 6.11828M12.7634 6.11828C13.1739 6.93757 14.0213 7.5 15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 5.40197 12.5949 5.78179 12.7634 6.11828ZM12.7634 13.8817C12.5949 14.2182 12.5 14.598 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C14.0213 12.5 13.1739 13.0624 12.7634 13.8817Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
            <Link className='px-6 py-3 bg-[#4A21EF] rounded-[6.25rem]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.1665 4.16667C4.1665 3.24619 4.9127 2.5 5.83317 2.5H14.1665C15.087 2.5 15.8332 3.24619 15.8332 4.16667V17.5L9.99984 14.5833L4.1665 17.5V4.16667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </BackgroundBanner>
    </div>
  )
}

export default City