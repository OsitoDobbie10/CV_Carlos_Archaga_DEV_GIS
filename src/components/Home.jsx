import React from 'react'
import "../styles/Home.css";
import { useState } from 'react';
import InicioPage from "./InicioPage";
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import Title from './Title';
import { motion } from "framer-motion";
import Foto from "../files/Mi_FOTO_PAPU.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
import Carrusel from './Carrusel';
import GISData from './GISData';
import Footer from './Footer';
const Home = () => {
  const [inicio,setInicio] = useState(true);
  const widthwindow = window.innerWidth<=768? true:false;

  setTimeout(()=>{
    setInicio(false)
  },2000)
  if (inicio) return <InicioPage/>
  
  return (
    <div className='Home'>
      <Navbar/>
      <ScrollToTop/>
      {
        widthwindow ? 
        <div className='titulo'>
          <h2>Soy analista y desarrollador GIS.</h2>
        </div>:
        <Title texto ="Bienvenido :)"/>
      }
      
      <div className='redes'>
        <a className='enlaces' href="https://www.facebook.com/osito.dobbie.9"><AiFillFacebook/></a>
        <a className='enlaces' href="https://www.instagram.com/carlos_cabina10/"><AiFillInstagram/></a>
        <a className='enlaces' href="https://www.linkedin.com/in/carlos-antonio-archaga-martinez-b7a494171/"><AiFillLinkedin/></a>
        <a className='enlaces' href="https://github.com/OsitoDobbie10"><AiOutlineGithub/></a>
      </div>
      <motion.div
       initial={{scale:0}}
       transition={{duration:2}}
       animate={{scale:1}}
       className="imagen">
        <img src={Foto} alt="Mi foto" />
      </motion.div>
      <div className='TitleGIS'>
        <h1>Sistemas de información geográfica.</h1>
      </div>
      <Carrusel/>
      <GISData 
      Testimonios="Galeria de mapas"
      They="Productos GIS"
      Say="Analista y desarrollador GIS"
      izquierda="leftArrow"
      derecha = "rightArrow"
      />
      <Footer/> 
    </div>
  )
}

export default Home;