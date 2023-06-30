import React from 'react'
import Navbar from './Navbar';
import Portafolio from '../data/Portafolio';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import MAPLOGO from "../files/planeta-tierra.png"; 
import {motion } from "framer-motion";
import "../styles/PortafolioGIS.css";
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop';
const PortafolioGIS = () => {
  const [search,setSearch] = useSearchParams("");
  const find = (e)=>{
    setSearch({filter:e.target.value});};
  const filtrar = search.get("filter") ?? " ";
  return (
    
    <div>
      <Navbar/>
      <ScrollToTop/>
      <div className='Portafolio'>
       <div className='App-header'>
       <h2>Portafolio de proyectos GIS</h2>
        <motion.img
        initial={{scale:0}}
        transition={{duration:2}}
        animate={{scale:1}}
        src={MAPLOGO}
        alt="Tierra"
        className='App-logo'/>
        </div>
        <h2 style={{textAlign:"center",color:"white"}}>Filtrado de proyectos web GIS.</h2>
        <input type="text" value={filtrar} onChange={find}/>
        <ul className='listado'>
          {
            Portafolio.filter((gis)=>{
              if (!find) return true;
              const name = gis.title.toLowerCase();
              return name.includes(filtrar.toLowerCase())}).map((data)=>{
              return <li key={data.id}>
                     <NavLink style={({isActive})=> isActive ? {color:"red"}:{textDecoration:"none" ,color:"yellow"}}
                     to={`/GIS/${data.id}`}>
                      {data.title}
                     </NavLink>
                    </li>
              })
          }
        </ul>
      </div>
      <section>
        <Outlet/>
      </section>
      <Footer/>

    </div>
  )
}

export default PortafolioGIS;