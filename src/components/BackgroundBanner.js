import React from 'react'

function BackgroundBanner({url,children,className='h-[95vh]'}) {
    return (
        <div className={`relative mt-2 ${className}` }>
            <img src={url} alt="HomeGif" className='rounded-[1.25rem] opacity-90 absolute top-0 left-0 w-full h-full object-cover -z-40' />
            {
                children
            }
        </div>
    )   
}

export default BackgroundBanner