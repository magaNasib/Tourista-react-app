import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

export function Main() {
    
    let [active, setActive] = useState(false)
    useEffect(() => {
      setActive(window.location.href.includes('destinations'))
  
    }, [])
    return (
        <>
            <Header active={active}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
