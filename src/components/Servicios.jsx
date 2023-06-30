import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Video from "../files/Tierra-inicio.mp4";
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';
import InicioPage from './InicioPage';
import Servicios1 from "../data/Sevicios";
import "../styles/Servicios.css";
const Servicios = () => {
  const [inicio,setInicio] = useState(true);
  setTimeout(()=>{
    setInicio(false)
  },2000)
  if (inicio) return <InicioPage/>
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <video src={Video} autoplay loop muted ></video>
      <div className='Servicios-GIS'>
        {
          Servicios1.map((servicios)=>{
            return <div className=' class' key={servicios.id}>
                    <div className='text'>
                      <h1>{servicios.title}</h1>
                    </div>
                    <div className='contenido'>
                    <div className='resumen'>
                      <p>
                        {servicios.desc}
                      </p>
                    </div>

                    <div className='slider2'>
                      <ul>
                        {
                          servicios.imagen.map((img)=>{
                            return <li key={img.id}>
                                    <img src={img.mapa} alt={img.id} />                             
                                  </li>
                          })
                        }
                      </ul>
                    </div>
                    
                    </div>
                   </div>
          })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Servicios;