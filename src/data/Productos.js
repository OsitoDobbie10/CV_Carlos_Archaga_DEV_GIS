import imagen1 from "../files/Mapa_edificio1.PNG";
import image2 from "../files/2017_TM.png";
import imagen3 from "../files/ROMA_IN_7.jpg";
const Productos = [
    {
    image: imagen1,
    review:
      "Producto patrimonio AMDC levantamiento y generación de predios de áreas verdes, edificios históricos.",
    name: 'Edificios históricos plano.',
    status : 'Catastro'
    },
    {
    image: image2,
    review:"Mapa de temperatura máxima considerando la elevación usando como referencia un DEM para considerar como aumenta la temperatura con la altitud.",
    name:'Mapa de temperatura máxima',
    status:'Geoestadistica'
    },
    {
    image: imagen3,
    review:
          "Dashboard medición de datos en tiempo real de las estaciones hidrometeorológicas en la zona valle de sula.",
    name: 'Dashboard ROMA-IN',
    status : 'Gestión de riesgos.'
    }
]

export default Productos;