

import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export function ChangableContent({ heading, arr, save, isCity, isCountry }) {

    // const navigate = useNavigate()
    const navigate = (isCity && '/destinations/Italy/Roma') || (isCountry && '/destinations/Italy')
    return (
        <>
            <h3 className='text-center text-[#141D24] font-bold text-4xl my-10'>{heading}</h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 justify-center gap-6 flex-wrap'>
                {
                    arr.map(({ id, img, title, trip, date, price }) => {
                        return (
                            <div key={id} className='rounded-2xl border border-[#E3E7EB] text-[#141D24]'>
                                <Link to={navigate}>
                                    <div className='relative'>
                                        <img src={img} alt={title} />
                                        {save && <button className='p-3 rounded-full bg-white text-[#4A21EF] absolute right-4 top-4'><BsBookmark className='text-[1.1rem]' /></button>}
                                    </div>
                                    <div className='p-4'>
                                        <p className='text-[#5E6F7D] text-xs'>{trip}</p>
                                        <p className='my-2 font-semibold'>{title}</p>
                                        <div className='flex justify-between'>
                                            <span className='text-[#5E6F7D] text-xs'>
                                                {date}
                                            </span>
                                            <p>
                                                <span className='text-[#5E6F7D] text-xs'>From </span>
                                                <span className='font-semibold'>{price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
