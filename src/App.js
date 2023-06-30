import React from 'react'
import { createBrowserRouter,Navigate, RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import Bibliografia from "./components/Bibliografia";
import Servicios from "./components/Servicios";
import GISWEB from "./components/GISWEB";
import PortafolioGIS from "./components/PortafolioGIS";
import GIS from "./components/GIS";
import "./App.css";
const App = () => {
    const Router = new createBrowserRouter([
        {
        path:'/',
        element: <Home/>,
        errorElement:<Navigate to='/'/>
       },
      {
        path:'/Bibliografia',
        element:<Bibliografia/>
      },
    
      {
        path:'/Servicios',
        element:<Servicios/>
      },
      
      {
        path:'/Skills',
        element:<GISWEB/>
      },
      {
        path:'/GIS',
        element:<PortafolioGIS/>,
        children:[
          {
            path:'/GIS:gisId',
            element:<GIS/> 
          }
        ]
      }
    ])
  return (
    <RouterProvider router={Router}/>
  )
}

export default App;