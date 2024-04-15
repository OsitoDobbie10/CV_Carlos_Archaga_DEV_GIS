import Geo from "../files/Geoturismo.png";
import HTML from "../files/HTML_logo.jpg";
import CSS from "../files/CSS_Logo.png";
import JS from "../files/JS_Logo.png";
import DSH from "../files/Dashboard_Logo.png";
import Experience from "../files/Exoerience_Logo.png";
import Leaflet from "../files/Leaflet_Logo.png";
import ESRI from "../files/ESRI_Logo.jpg";
import ROMA from "../files/ROMA_IN_3.jpg";
import Vista from "../files/ROMA_IN_7.jpg";
import DEMO from "../files/DEMIWEB.png";
import Galeria from "../files/GaleriaWEBGIS.png";
import React from "../files/React-JS-Mapas.png";
import LogoReact from "../files/descargaReact.png"
import TIENDA from '../files/TIENDA.png';
import LASTIMAGE from '../files/APP-COPECO.png';
import reactAPP2 from '../files/REACT-APP2.png';
import ExperienciaGIS from '../files/ExperienciaGIS.png';
import Movie from '../files/MovieYT.png';
import MapaExperince from '../files/MapaExperience.png';
import Typescript from "../files/Typescript.png";
import Zustand from "../files/Zustand.jpg";
import JSQuizz from "../data/Web6.PNG";
import WebGIS from "../data/Web7.PNG";
import Supabase from "../files/SupabaseLogo.jpg";
import BDPos from "../files/BDPostgres.png";
import Query from "../files/Query.png"
import APPLOGO from "../files/TiendaAPPDD.PNG"

const Portafolio = [ 
{
    id:1,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Propuesta proyecto Geoturismo",
    categoria:"Geoturismo",
    imagen:Geo,
    tecnologias:[
        {img:HTML},
        {img:CSS},
        {img:JS},
        {img:Leaflet}
    ],
    descp:"Proyecto de maquetado web para una propuesta de creacion de un servidor gis web para la tematica de turismo en Honduras",
    enlace:"https://ositodobbie10.github.io/GeoturismoHN/Inicio.html"
},
{
    id:2,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Propuesta geoportal web",
    categoria:"Geportal",
    imagen:DEMO,
    tecnologias:[
        {img:HTML},
        {img:CSS},
        {img:JS},
        {img:Leaflet}
    ],
    descp:"Proyecto de maquetado web para una propuesta de creacion de un servidor gis que funcionara como una agenda de informacion espacial para un seguimiento de los proyectos en el gobierno de xiomara castro a nivel nacional",
    enlace:"https://geportalhn.github.io/Demo-Geoportal-Xiomara/Inicio.html"
},
{
    id:3,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Sistema de alerta temprana ROMA-IN",
    categoria:"Gestion",
    imagen:ROMA,
    tecnologias:[
        {img:ESRI},
        {img:Experience},
    ],
    descp:"Propuesta sistema de alerta temprana ROMA-IN segundo lugar en el concurso de innovacion tecnologica para la gestion de riesgo de desastres CEPREDENAC a nivel de CentroAmercia y el caribe.",
    enlace:"https://experience.arcgis.com/experience/5f7fe62ac1c34414b5e6b555a488d028/page/P%C3%A1gina-2/?draft=true"
},
{
    id:4,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Dahboard de alerta temprana ROMA-IN",
    categoria:"Gestion y  dev",
    imagen:Vista,
    tecnologias:[
        {img:ESRI},
        {img:DSH},
    ],
    descp:"Dashboard de la toma del nivel del rio a partir de las estaciones hidrometeorologicas de la NOOA.",
    enlace:"https://www.arcgis.com/apps/dashboards/62b6929897414688bf68a8f083ac3983"
},
{
    id:5,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Galeria de mapas web con Experience Builder",
    categoria:"Developer GIS ESRI",
    imagen:Galeria,
    tecnologias:[
        {img:ESRI},
        {img:Experience},
    ],
    descp:"Experiencia centralizada en ser un contenedor de aplicaciones de mapas con diferentes ejes tematicos.",
    enlace:"https://experience.arcgis.com/experience/5652891ed0934c18813ef487fa522ef0"
},
{
    id:6,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Galeria de mapas web con React JS",
    categoria:"Developer GIS React JS",
    imagen:React,
    tecnologias:[
        {img:LogoReact},
        {img:ESRI},
        {img:Experience},
    ],
    descp:"Galeria de mapas interactiva con mapas de publicaciones de mapas web",
    enlace:"https://ancar-web.github.io/Mapas-React/"
},
{
    id:7,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Tienda virtual con REACT JS demo",
    categoria:"Developer GIS React JS",
    imagen:TIENDA,
    tecnologias:[
        {img:LogoReact},
        {img:'https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png'}
    ],
    descp:"Tienda virtual con REACT JS proyecto demo, usando dependencias, conexion a una api rest, estados y envio de datos",
    enlace:"https://ositodobbie10.github.io/Nico-Store-demo/"
},
{
    id:8,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Afectaciones en Infraestructura Crítica",
    categoria:"Developer GIS React JS",
    imagen:LASTIMAGE,
    tecnologias:[
        {img:ESRI},
        {img:Experience}],
    descp:"Reporte de incidentes por afectaciones de riesgos en infraestructura crítica a nivel nacional, con tecnologia ESRI",
    enlace:"https://experience.arcgis.com/experience/8bfbfa5b2e084b7a9e5d7deb5481ac16/page/Incio/"
},
{
    id:9,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Aplicacion de registro de presupuesto con REACT JS",
    categoria:"Developer GIS React JS",
    imagen:reactAPP2,
    tecnologias:[
        {img:LogoReact},
        {img:'https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png'}],
    descp:"Aplicacion de registro de presupuesto con REACT JS UseState,Useeffect, UseReducer, UserRef, UseContext y CustomHooks",
    enlace:"https://main--gregarious-croquembouche-8e92e9.netlify.app/"
},
{
    id:10,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Aplicacion de busqueda y filtro de peliculas y series usando la api de YTMovies",
    categoria:"Developer GIS React JS",
    imagen:Movie,
    tecnologias:[
        {img:LogoReact},
        {img:'https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png'}],
    descp:"Aplicacion de filtro, busqueda de peliculas y series por genero por nombre y actores usando la API de YT movie api con mas de 300 mil datos, usando tailwind css como estilos y Vite con React",
    enlace:"https://superb-sunburst-bdc8cf.netlify.app/"
},
{
    id:11,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Mapa de Datos fundamentales descargar e interaccion de capas",
    categoria:"Developer GIS React JS",
    imagen:MapaExperince,
    tecnologias:[
        {img:LogoReact},
        {img:ESRI},
        {img:Experience}],
    descp:"Aplicacion de interaccion con datos fundamentales, descarga de capas, vista de dashboards interactivos e historia de mapas creadas en React JS y boostrap",
    enlace:"https://experience.arcgis.com/experience/54c9883f46864012a700fcb1661f2a52"
},
{   id:12,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Quizz de Javascript",
    categoria:"Developer GIS React JS",
    imagen:JSQuizz,
    tecnologias:[
        {img:LogoReact},
        {img:Typescript},
        {img:Zustand}],
    descp:"Aplicacion para platicar el uso de Zustand controlador de estados globales usando typescript",
    enlace:"https://astounding-cranachan-6b367e.netlify.app/"
},
{
    id:13,
    proyectoweb:"Proyectos GIS Carlos Archaga",
    title:"Aplicacion de compra de productos para negocios locales", 
    categoria:"Developer GIS React JS",
    imagen:APPLOGO,
    tecnologias:[
        {img:LogoReact},
        {img:Query},
        {img:Zustand},
        {img:Supabase},
        {img:BDPos}],
    descp:"Aplicacion FullStack usando como backend Supabase para login e indetificacion de usuarios,Api rest y base de datos usando postgres de lado del cliente se usar React, ReactQuery y Zunstand para controlador de estados globales",
    enlace:"https://main--tiendavirtualcompras.netlify.app/"
}
];

export default Portafolio;