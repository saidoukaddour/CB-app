import React from 'react'
import img14 from './images/rehabilitation.jpg'
import img15 from './images/DIGITAL_SMILE_DESIGN-400x225.jpg'
import './styles/Rehabilitation.css'
import { motion } from "framer-motion/dist/framer-motion";

function Réhabilitation() {
  return (
    <motion.div className='rehab'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1>Réhabilitation complète du sourire</h1>
      <p>
Retrouver un sourire éclatant et naturel
Dents cassés ou jaunies, alignement imparfait…, l’esthétique du sourire peut être altérée par de nombreuses raisons. Pour retrouver un beau sourire, de multiples solutions peuvent être préconisées afin de répondre à la nature de chaque cas.

Plusieurs traitements, plus ou moins invasifs pourront être envisagés : les facettes dentaires pelliculaires ou non, les céramiques dentaires, le blanchiment dentaire, la dentisterie adhésive, la chirurgie parodontale…

Il est donc fondamental de procéder dès le départ à un diagnostic complet, permettant de déterminer la solution la plus adaptée pour le patient. Notre clinique pratique deux techniques de diagnostic innovantes, le mock-up ou la simulation numérique.</p>
<img className='img14' src={img14}></img>
<h1>Digital Smile Design – DSD</h1>
<p>
Le Digital Smile Design (conception numérique du sourie) est un outil numérique révolutionnaire permettant de diagnostiquer votre nouveau sourire et de vous projeter avant de démarrer votre projet esthétique à l’aide de photos et de vidéos, Le DSD permet de saisir la relation entre les dents, les gencives, les lèvres et le visage, afin d’établir une analyse esthétique du sourire et du visage très précise.
Le bénéfice de ces simulations sont: une meilleure visualisation et compréhension des problèmes esthétiques dès la conception de votre projet.</p>
<div className='diag'>
  <img className='img15' src={img15}></img>
  <h1>Le diagnostic par Mock Up</h1>
  <p>
Le Mock-up est la maquette de votre futur sourire.
Le diagnostic par Mock-up nous permet de vous rendre un sourire harmonieux et éclatant, en parfait accord avec votre personnalité. A partir d’empreinte et de clichés photos, notre laboratoire va concevoir sur modèle en plâtre votre nouveau sourire en cire (Wax-up).

Par une simple apposition sur vos dents, cette simulation est alors testée directement dans votre bouche (Mock-up) afin que vous puissiez appréhender votre nouveau sourire avant tout début de traitement, et sans aucune préparation dentaire ni engagement. Vous pouvez ainsi pré visualiser votre nouveau sourire avant de démarrer votre traitement esthétique.</p>
</div>
    </motion.div>
  )
}

export default Réhabilitation
