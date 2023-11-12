import React, { useState } from 'react'
import bgFaq from '../../assets/bgFaq.png';
import BackgroundBanner from '../../components/BackgroundBanner';


const FAQ_Answers = [
  {
    id: 0,
    question: 'What are the best tips for finding budget-friendly travel accommodations?',
    answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
  },
  {
    id: 1,
    question: 'How can I find authentic local experiences when traveling?',
    answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
  },
  {
    id: 2,
    question: 'What should I pack for a long-term trip or backpacking adventure?',
    answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
  },
  {
    id: 3,
    question: 'What are some strategies for overcoming jet lag when traveling across time zones?',
    answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
  },
  {
    id: 4,
    question: 'What are the visa requirements for popular tourist destinations?',
    answer: 'To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.'
  }
]
function FAQ() {

  const [present, setPresent] = useState(0)
  return (
    <>
      <div className='container'>
        <BackgroundBanner url={bgFaq} className='h-[24rem]'>

        </BackgroundBanner>

      </div>
      <div className="container py-[7.5rem] px-[4.5rem]">
        {
          FAQ_Answers.map((item, index) => {
            return (
              <div key={item.id} className='py-8 px-14 border-b border-[#E3E7EB] text-[#141D24]'>
                <div className='flex justify-between items-center'>
                  <span className='text-[#4A21EF] text-[2.5rem] font-bold self-start'>
                    {(index + 1) / 10 >= 1 ? (index + 1) : '0' + (index + 1)}
                  </span>

                  <div className='px-10'>
                    <h4 className=' font-semibold text-xl'>{item.question}</h4>
                    <p className={`py-6 text-justify ${present !==index && 'hidden'}`}>
                      {item.answer}
                    </p>
                  </div>
                  {present === index && <button onClick={() => { setPresent(null) }} className='self-start p-4 bg-[#4A21EF] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6569 1.75744L10.2426 0.343227L6 4.58587L1.75736 0.343226L0.343146 1.75744L4.58579 6.00008L0.343146 10.2427L1.75736 11.6569L6 7.41429L10.2426 11.6569L11.6569 10.2427L7.41421 6.00008L11.6569 1.75744Z" fill="white" />
                  </svg></button>}
                  {present !== index && <button onClick={() => setPresent(index)} className='p-4 self-start bg-[#F5F7FA] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5H6V6.5H0V8.5H6V14.5H8V8.5H14V6.5H8V0.5Z" fill="#788795" />
                  </svg></button>}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default FAQ