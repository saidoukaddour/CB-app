import React from 'react'
import img12 from './images/pellicule-facette-dentaire.jpg'
import img13 from './images/esthetique.jpg'
import './styles/Facette.css'

import { motion } from "framer-motion/dist/framer-motion";

function Facette() {
  return (
    <motion.div className='Fac'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
      <img className='img12' src ={img12}></img>
      <h1>Facette dentaire : perfection esthétique</h1>
      <p>

À notre cabinet, pour corriger les imperfections esthétiques telles que les colorations très prononcées due à la prise d’antibiotiques, le jaunissement du au tabac par exemple ou tout autre raison, nos spécialistes proposent des facettes dentaires afin d’embellir, de rajeunir, ou même de transformer votre sourire en donnant plus de blancheur a vos dents.
<br></br>
Il s’agit de pellicules ultra-minces en céramique posées sur le devant de la dent. Comparé aux couronnes , les facettes dentaires n’occasionnent aucune perte d’épaisseur au niveau de la dent.
<br></br>
Elles permettent de corriger, en un seul traitement et durablement, plusieurs anomalies associées, comme la teinte des dents lorsqu’il existe des colorations qui ne relèvent pas d’un simple blanchiment, les malpositions légères ou les espaces inter-dentaire, les anomalies de forme de la dent, les usures dentaires ou dents fragilisées ainsi que les traces liées à un déchaussement des dents.</p>
<div className='prem'>
  <img className='img13' src={img13}></img>
  <p>En premier lieu, lors d’une première séance, sous anesthésie locale, le dentiste effectue une micro-abrasion de 0,2 à 0,5 mm de la dent pour qu’elle puisse recevoir la facette. Ensuite, une empreinte est réalisée pour fabriquer la future facette qui sera adaptée au sourire du patient. Des facettes provisoires sont alors collées.
<br></br>
Au cours de la deuxième séance, les facettes définitives sont essayées puis fixées sur l’émail des dents. Les résultats sont spectaculaires et immédiats. Les facettes en céramique ne se distinguent pas des dents naturelles. Ils sont optimaux et durables grâce à l’utilisation d’adhésifs très résistants et de la céramique qui conserve sa teinte dans le temps.
<br></br>
Les avantages :
La dent est conservée vivante.
Les facettes offrent une solution permanente aux anomalies de teinte, de forme et de position des dents ou à des composites disgracieux.
Cette méthode permet d’éviter des traitements plus lourds et plus mutilants, comme la pose de bridgeou de couronne.</p>
</div>
    </motion.div>
  )
}

export default Facette
