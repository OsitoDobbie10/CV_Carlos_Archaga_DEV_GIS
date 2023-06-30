import React from 'react'

import Home from './Home';
import Bibliografia from "./Bibliografia";
import Servicios from "./Servicios";
import Skills from "./skills";
import PortafolioGIS from './PortafolioGIS';
import GIS from './components/GIS';
const Rutas = () => {
    //rutas de la pagina 
  const Router = createBrowserRouter([
    {path:'/Home',
    element:<Home/>},

    {path:'/Bibliografia',
     element:<Bibliografia/>
    },

    {
      path:'/Servicios',
      element: <Servicios/>
    },

    {
      path:'/Skills',
      element:<Skills />
    },

    {
      path:"/PortafolioGIS",
      element: <PortafolioGIS/>,
      children:[
        {
        path:'gis/:gisId',
        element:<GIS/>
        }
     ]
    }
  ])
  return (
   <div>
    
   </div>
  )
}

export default Rutas