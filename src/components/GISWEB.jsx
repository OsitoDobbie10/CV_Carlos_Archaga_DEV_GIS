import React from 'react';
import Navbar from './Navbar';
import Video from "../files/Tierra-inicio.mp4";
import ScrollToTop from "./ScrollToTop";
import InicioPage from "./InicioPage";
import SkillsGIS from "../data/SkillsGIS";
import SkillDeveloper from "../data/SkillDeveloper";
import Title from './Title';
import { useState } from 'react';
import { motion } from "framer-motion";
import Footer from './Footer';
import "../styles/GISWEB.css";
const GISWEB = () => {
  const [inicio,setInicio] = useState(true);
  setTimeout(()=>{
    setInicio(false)
  },1000)
  if (inicio) return <InicioPage/>
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <video src={Video} autoplay loop muted ></video>
      <Title texto="Skills GIS"/>
      <div className='container-gis'>
          {
           SkillsGIS.map((gis)=>{
            return <motion.div
                    initial={{scale:0}}
                    transition={{duration:2}}
                    animate={{scale:1}}
                    key={gis.id}
                    className='giscontainer'>
                    <img
                    src={gis.imagen}
                    alt={gis.id} />
                    <span>
                      {gis.Desc}
                    </span>
                   </motion.div>
           })
          }
      </div>
      <Title texto="Skills GIS developer"/>
      <div className='container-web'>
        {
            SkillDeveloper.map((dev)=>{
                return <motion.div
                        key={dev.id}
                        className='giscontainer'
                        initial={{scale:0}}
                        transition={{duration:2}}
                        animate={{scale:1}}>
                        <img src={dev.imagen} alt={dev.id}/>
                        <span>
                            {dev.Desc}
                        </span>
                      </motion.div>
            })
        }
      </div>
     <Footer/>
    </div>
  )
}

export default GISWEB