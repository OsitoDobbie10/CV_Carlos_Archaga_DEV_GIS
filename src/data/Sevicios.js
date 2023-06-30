import Mapa1 from "../files/Mapa_Areas_verdes.PNG";
import Mapa2 from "../files/2017_TM.png";
import Mapa3 from "../files/Mapa_TICO.PNG";
import Mapa3_4 from "../files/PP_2014.png";
import Mapa4 from "../files/ROMAIN.PNG";
import Mapa5 from "../files/ROMA_IN_5.jpg";
import Mapa6 from "../files/ROMA_IN_4.jpg";
import Mapa6_4 from "../files/ROMA_IN_3.jpg";
import Mapa7 from "../files/SDE_DATOS.PNG";
import Mapa8 from "../files/Mapa_Equipamiento.PNG";
import Mapa9 from "../files/GEODATABASE.jpg";
import Mapa9_3 from "../files/Mapa_edificio1.PNG";
const Servicios = [
    {
        id:1,
        title:"Servicios profesionales Cartografia Digital",
        imagen:[
            {id:1,
            mapa:Mapa1},
            {id:2,
            mapa:Mapa2},
            {id:3,
            mapa:Mapa3},
            {id:4,
            mapa:Mapa3_4
            }
        ],
        desc:"Elaboración de mapas en formato digital para proyectos, tesis, publicaciones y páginas web, adaptados según la necesidad del estudio que se realice. Esto incluye la generación de la información, la elaboración de la cartografía base y la elaboración de todo tipo de mapa temático. Desde tematicas como catastro, riesgos, geoestadistica, uso y cambio del suelo, geomarketing, delimitacion de cuencas hidrograficas, analisis de ubicacion mas adecuadas para un tipo de servicio, geologicos, variables climatologicas entre otros ejes tematicos.Mapas web usando leaflet y el entorno de ARGGIS online con datos en tiempo real para el monitoreo de informacion para la toma de desiciones"
    },
    {   id:2,
        title:"Diseño e implementación de un Sistema de Informacion Geografica (SIG)",
        imagen:[
            {id:5,
            mapa:Mapa4},
            {id:6,
            mapa:Mapa5},
            {id:7,
            mapa:Mapa6},
            {id:8,
             mapa:Mapa6_4
            }
        ],
        desc:"Diseño e implementación de un Sistema de Información Geográfica para cualquier organización, empresa o institución que le permita obtener todas las herramientas necesarias para la planificación, la toma de decisiones y el análisis espacial. Creación de un sistema de consulta dinámico a través de un visor cartográfico que genere reportes gráficos y productos cartográficos para la gestión organizacional. Entrenamiento para el personal de gestión del SIG y asesoría post-implementación.Usando herramientas como Arcgis, QGIS, base de datos espaciales reportes y graficos que describa los datos, desde tematicas como catastro y gestion de riesgos usando datos levantados en campo o digitalizados en el software GIS o CAD."
    },
    {
        id:3,
        title:"Diseño e implementación de bases de datos",
        imagen:[
            {id:9,
            mapa:Mapa7},
            {id:10,
            mapa:Mapa8},
            {id:11,
            mapa:Mapa9},
            {id:12,
            mapa:Mapa9_3
            }
        ],
        desc:"Diseño e implementación de bases de datos espacial de cualquier tipo y de cualquier rama del conocimiento, así como edición y depuración de datos existentes para su implementación. Creación de sistemas dinámicos de consulta que generen informes, reportes gráficos internos y mapas tematicos, asesoría y servicio post-implementación que describa la informacion espacial.Se generara todos los aspectos que una base de datos relacional toma para administrar la informacion, usaremos los gestores de Postgis para QGIS en un entorno open source o se usara ARCSDE con postgre SQL o SQL Server para el entorno ARCGIS."
    }
]

export default Servicios;