import React from 'react';
import "../styles/GISData.css";
import { useState } from 'react';
import { motion } from "framer-motion";
import testimonialsData from "../data/Productos";

const GISData = (props) => {
    const {Testimonios,They,Say,izquierda,derecha} = props;
    const [selected,setSelected] = useState(0);
    const tlength = testimonialsData.length;
    const transition = {type:"spring",duration:3}
  return (
    <div className="Testimonios">
        <div className="left-t">
            <span>{Testimonios}</span>
            <span className="stroke-text">{They}</span>
            <span>{Say}</span> 
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition} 
            >{testimonialsData[selected].review}</motion.span>
            <span>
                <span style={{color:'orange'}}>
                    {testimonialsData[selected].name}
                </span>
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="rigth-t">
           <img src={testimonialsData[selected].image} alt="" />
           <div className="obj1"></div>
           <div className="obj2"></div>
           <div className="arrows">
            <img 
            src={require(`../files/${izquierda}.png`)}
             alt=""
             onClick={()=>{
                selected === 0 ? setSelected(tlength-1):
                                 setSelected((prev)=> prev -1)
             }}
              />
            <img 
            src={require(`../files/${derecha}.png`)}
            alt=""
            onClick={()=>{
                selected === tlength - 1 ? setSelected(0):
                                           setSelected((prev)=> prev + 1)
            }} />
         </div>
        </div>
    </div>
  )
}

export default GISData;