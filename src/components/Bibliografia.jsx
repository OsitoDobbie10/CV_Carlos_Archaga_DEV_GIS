import React from 'react'
import Navbar from './Navbar';
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';
import Video1 from "../files/Tierra-inicio.mp4"
import Yo from "../files/Yo papusin.jpg";
import "../styles/Bibliografia.css";
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';
import InicioReact from './InicioReact';
import Footer from './Footer';
const Bibliografia = () => {
  const [inicio,setInicio] = useState(true);
  setTimeout(()=>{
    setInicio(false)
  },1500)
  if (inicio) return <InicioReact/>
  return (
    <div>
      <video src={Video1} autoplay loop muted></video>
      <Navbar/>
      <ScrollToTop/>
      <div className="encabezado">
        <motion.img
        initial={{scale:0}}
        transition={{duration:2}}
        animate={{scale:1}}
        src={Yo} alt="YO" />
        <section class="hero align-items-stretch">
        <div class="hero-div text-center">
            <h1>Hola soy Carlos Archaga</h1>
            <h3>Analista SIG y desarrollador GIS.</h3>
        </div>
        <div class="hero-div-2 img-fluid ">
        <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="GIS-WEB"/>
        </div>
    </section>
      <article className='informacion'>
      <h1>Bibliografia</h1>
     <div className="datos">
     <div className="dato">
        <span>Edad</span>
        <span>
        <NumberCounter end={27} start={0} delay='4' postFix="años"/>
        </span>
      </div>
      <div className="dato">
        <span>Altura</span>
        <span>
        <NumberCounter end={180} start={0} delay='4' postFix="cm"/>
        </span>
      </div>
      <div className="dato">
        <span>Peso</span>
        <span>
        <NumberCounter end={210} start={0} delay='4' postFix="lbs"/>
        </span>
      </div>
      <div className="dato">
        <span>Graduado</span>
        <span>
        <NumberCounter end={2022} start={1900} delay='4'/>
        </span>
      </div>
     </div>
     <p>
     Carlos Antonio Archaga Martínez Soy egresado de la carrera Lic. Ciencia y tecnología de la información geográfica en la universidad nacional autónoma de Honduras tengo 25 años, tengo experiencia laboral al trabajar en la consultoría TICA en el puesto de analista SIG de febrero a mayo de 2021 y en GOAL proyecto SIG 2 para la alcaldía municipal del distrito central. Mi formación académica fue en la escuela católica Emiliani primaria, ciclo común y mi educación de bachiller fue en el Instituto Nimia Baquedano donde me gradué de bachiller técnico en computación en el año 2013.
     Mi educación universitaria fue en la universidad nacional autónoma de Honduras desde el año 2014 a 2021, soy experto SIG y manejo diferentes tecnologías y enfoques como teledetección, programación GIS, Gestión de riesgo, catastro, hidrología, fotogrametría y cartografía digital etc. Entre mis participaciones académicas destacadas fue como ponente en el segundo congreso de ciencias espaciales como mi investigación de incendios forestales, y ponente del webinar programación R como un SIG. He realizado investigaciones académicas con el articulo análisis de factibilidad la laguna el pedregal desde un enfoque de la academia y mi investigación de una propuesta de una metodología de un mapa de cambio de uso de suelo. Actualmente me estoy capacitando como front end developer donde domino HTML, CSS, JavaScript y React JS quiero especializarme en desarrollo GIS.

     </p>
    </article>
    </div>
    <Footer/>
    </div>
  )
}

export default Bibliografia;