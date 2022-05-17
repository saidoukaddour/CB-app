import React from 'react'
import img5 from './images/Orthodontie-1.jpg'
import img6 from './images/Invisalign.jpg'
import './styles/Orthodontie.css'
import { motion } from "framer-motion/dist/framer-motion";
function Orthodontie() {
  return (
    <motion.div className='ortho'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      
      <img className='img5' src={img5}></img>
      <h1>L’orthodontie</h1>
    <p>
L’orthodontie concerne les malpositions des dents. En empêchant l’apparition des malformations, ou en les corrigeant, les soins orthodontiques permettent de favoriser le bien être social des patients. Et surtout de préserver la santé bucco-dentaire.
<br></br>
Une fonction équilibrée et harmonieuse de l’appareil manducateur (articulations, muscles, dents) préserve sa santé et retarde les effets de son vieillissement naturel.</p>
<div className='ling'>

<img className='img6' src={img6}></img>
<h1>Orthodontie linguale</h1>
<p>
Un traitement qui ne se voit pas, c’est ce qu’offre l’orthodontie linguale à ceux qui souhaitent bénéficier d’une correction orthodontique sans pour autant compromettre leur sourire.
<br></br>
L’orthodontie linguale tire son nom du positionnement des attaches orthodontiques sur la face interne des dents, c’est-à-dire du côté de la langue. Il s’agit d’une technique de traitement qui utilise les mêmes principes que les techniques classiques où les attaches sont positionnées sur la face externe des dents vestibulaires.
<h1>Invisalign</h1>

Invisalign est une technique alternative aux bagues et appareils dentaires traditionnelles. Cette méthode repose sur l’utilisation d’une série de gouttières transparentes (aligners) évolutives qui permettent d’aligner les dents progressivement selon le plan de traitement établi par le praticien ou il agit sur la position de vos dents de manière quasi invisible.
<br></br>
Fabriqués sur mesure pour vos dents afin de les déplacer petit à petit, chaque mouvement très discret vous rapproche de votre futur sourire, avec efficacité, douceur et précision.</p>
</div>
    </motion.div>
  )
}

export default Orthodontie
