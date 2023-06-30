import React from 'react';
import Portafolio from '../data/Portafolio';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import "../styles/GIS.css";
const GIS = () => {
  const Params = useParams();
  const getUser = (id)=>{
    return Portafolio.find((user)=>user.id === id);
  }
  const user = getUser(parseInt(Params.gisId))
  const transition = {type:"spring",duration:4}
 
  return (
    <motion.div
     className='GIS'
     initial={{opacity:0,x:-100}}
     animate={{opacity:1,x:0}}
     exit={{opacity:0,x:100}}
     transition={transition}>
      <h3>{user.title}</h3>
      <div className='imagenes'>
        {user.tecnologias.map((skills)=>{
          return <img src={skills.img} alt="devps"/>
        })}
      </div>
      <img src={user.imagen} alt="Descripcion" />
      <p>
        {user.descp}
      </p>
      <span><a href={user.enlace}>Mirar proyecto.</a></span>
    </motion.div>
  )
}

export default GIS;