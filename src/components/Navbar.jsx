import React from 'react'
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {FiXCircle} from "react-icons/fi";
import {FiMenu} from "react-icons/fi";
const Navbar = () => {
  const [opened,sertOpened] = useState(false);
  const mobile = window.innerWidth<=768? true:false;
  const close = ()=>{
    sertOpened(false);
  }
  const open = ()=>{
    sertOpened(true);
  }
  return (
    <div className='navbar'>
        {opened === false && mobile === true ?
        <div className='buton'>
            <FiMenu onClick={open}/>
        </div> :
            <div className='header'>
            <div className='botoncerrar'>
                <FiXCircle onClick={close}/>
            </div>
            <ul className='navbar-header'>
                <li><NavLink to={'/'} className={'link'}>Inicio</NavLink></li>
                <li><NavLink to={'/Bibliografia'} className={'link'}>Bibliografia</NavLink></li>
                <li><NavLink to={'/Servicios'} className={'link'}>Servicios</NavLink></li>
                <li><NavLink to={'/Skills'} className={'link'}>Skills</NavLink></li>
                <li><NavLink to={'/GIS'} className={'link'}>Portafolio</NavLink></li>
            </ul>
            </div>
        }
    </div>     
        )}

export default Navbar;