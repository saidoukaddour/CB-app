import React from 'react'
import img1 from './images/Plombage-dentaire.jpg'
import img2 from './images/inlay.jpg'
import './styles/Odontologie.css'
import { motion } from "framer-motion/dist/framer-motion";

function Odontologie() {
  return (
    <motion.div className='ondo'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <img className='img1' src={img1}></img>
     <h1>Odontologie conservatrice : Composite dentaire</h1>
    <p>
Lorsque la cavité laissée par une carie ou un amalgame disgracieux est peu volumineuse, la dent est restaurée par la mise en place de matériau composite. Le composite dentaire est une résine de la couleur de la dent, collée avec un adhésif spécifique.
<br></br>
Il en existe en plusieurs teintes, très proches des différentes couleurs des dents.
<br></br>
La clinique Ardentys vous propose des soins ultraconservateurs grâce a une instrumentation adaptée et des matériaux biocompatibles et esthétiques ( composite de dernière génération, ciment biocéramique).</p>
<div className='divv'>

<img className='img2' src={img2}></img>
<h1>Inlay onlay</h1>
<p>
Un inlay onlay est une prothèse venant combler la cavité d’une dent fracturée ou cariée.
<br></br>
Dans un cas comme dans l’autre, cette prothèse est fabriquée sur mesure par un laboratoire spécialisé (ou bien par le système de fabrication assistée CAD-CAM); Ce dernier peut être en céramique ou en résine composite.
<br></br>
Ayant pour avantage de préserver l’esthétique avec des teintes adaptées au reste de la dent.</p>
</div>
    </motion.div>
  )
}

export default Odontologie
