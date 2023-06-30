import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import Typed from 'typed.js';
import "../styles/typed.css";
const Title = (props) => {
const {texto} = props;
const Typedref = useRef(null);
useEffect(()=>{
        const typed = new Typed(Typedref.current,{
          strings:[`${texto}`],
          startDelay:300,
          typeSpeed:150,
          backDelay:150,
          backSpeed:150,
          smartBackspace:true,
          showCursor:true,
          loop:true
        })
      })
  return (
    <div className='typed'>
    <h1><span ref={Typedref}></span></h1>
    <h2>soy Analista y desarrollador GIS</h2>

    </div>
  )
}

export default Title