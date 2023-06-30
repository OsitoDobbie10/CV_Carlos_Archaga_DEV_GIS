import React from 'react';
import carrusel from '../data/Carrusel';
import "../styles/Carrusel.css";
const Carrusel = () => {
  return (
    <div class="content-all">
    <div class="content-carrousel">
      {carrusel.map((figure)=>{
        return <figure key={figure.id}>
               <img src={figure.imagen} alt={figure.id} />
              </figure>
      })}   
    </div>
</div>
  )
}

export default Carrusel