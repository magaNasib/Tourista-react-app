import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Destianations from '../pages/Destinations'
import DestinationRoutes from './DestinationRoutes'
import City from '../pages/Destinations/City'

function DestinationsRoutes() {
    
    return (<>
        <Routes path="/" element={<Outlet/>}>
            <Route index element={<Destianations />} />
            <Route path=":country" element={<DestinationRoutes />} >
            <Route path=":city" element={<City/>}/>
            </Route>
        </Routes>
        
    </>
    )
}

export default DestinationsRoutes