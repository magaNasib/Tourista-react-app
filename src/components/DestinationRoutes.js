import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import City from '../pages/Destinations/City'
import Destination from '../pages/Destinations/Destination'

function DestinationRoutes() {
    
    return (<>
        <Routes path="/" element={<Outlet/>}>
            <Route index element={<Destination />} />
            <Route path=":city" element={<City />} >
                
            </Route>
        </Routes>
        
    </>
    )
}

export default DestinationRoutes