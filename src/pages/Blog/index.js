import React from 'react'
import BackgroundBanner from '../../components/BackgroundBanner'
import bgBlog from '../../assets/bgBlog.png'
import food from '../../assets/food.png'
import see from '../../assets/see.png'
import drink from '../../assets/drink.png'
import inspiration from '../../assets/inspiration.png'
import travel from '../../assets/travel.png'
import './style.css'
import { Link } from 'react-router-dom'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'

const CATEGORIES = ['All articles', 'Food & Drink', 'Inspiration', 'Local Guides', 'See & Do', 'Travel Tips', 'Where to stay']
function Blog() {
  return (
    <>
      <div className="container">
        <BackgroundBanner className='h-[24rem]' url={bgBlog}>
        </BackgroundBanner>


        <div className='py-[4.5rem] flex items-center justify-center gap-4'>
          {
            CATEGORIES.map((item, index) => <span key={index} className={`rounded-[6.25rem] py-3 px-6 flex items-center justify-center  ${item === 'All articles' ? 'bg-[#4A21EF] text-white' : 'bg-[#F5F7FA] text-[#3A4D5A] '}`}>
              {item}
            </span>
            )
          }
        </div>

        <div className='parent gap-6 mb-[4rem]'>
          <div className="div1">
            <img src={food} alt="food" className='w-full h-auto' />
            <div className='body'>
              <h4 className=' font-semibold p-4'>
                Food & Drink
              </h4>
              <p className='px-4 pb-4 max-w-[24rem] text-[#141D24]'>
                Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…
              </p>
            </div>
          </div>
          <div className="div2">
            <img src={see} alt="see" className='w-full h-auto' />
            <div className='body'>
              <h4 className=' font-semibold p-4'>
                See & Do              </h4>
              <p className='px-4 pb-4 max-w-[24rem] text-[#141D24]'>
                Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...
              </p>
            </div>
          </div>
          <div className="div3">
            <img src={inspiration} alt="food" className='w-full h-auto' />
            <div className='body'>
              <h4 className=' font-semibold p-4'>
                Inspiration
              </h4>
              <p className='px-4 pb-4 max-w-[24rem] text-[#141D24]'>
                Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…
              </p>
            </div>
          </div>
          <div className="div4">
            <img src={travel} alt="food" className='w-full h-auto' />
            <div className='body'>
              <h4 className=' font-semibold p-4'>
                Travel Tips              </h4>
              <p className='px-4 pb-4 max-w-[24rem] text-[#141D24]'>
                Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...
              </p>
            </div>
          </div>
          <div className="div5">
            <img src={drink} alt="food" className='w-full h-auto' />
            <div className='body'>
              <h4 className=' font-semibold p-4'>
                Food & Drink              </h4>
              <p className='px-4 pb-4 max-w-[24rem] text-[#141D24]'>
                In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…
              </p>
            </div>
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

        <SignUpBanner/>
      </div>
    </>
  )
}

export default Blog