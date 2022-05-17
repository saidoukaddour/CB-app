import React from 'react'
import img11 from './images/blanchiment-dentaire-femme-sourire-400x378.jpg'
import img10 from './images/esthetique-profil-droit.jpg'
import './styles/Blanchiment.css'
import { motion } from "framer-motion/dist/framer-motion";
function Blanchiment() {
  return (
    <motion.div className='blanc'
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <img className='img10' src={img10}></img>
      <h1>Le blanchiment dentaire</h1>
      <p>
          Deux techniques peuvent être appliquées : le blanchiment ambulatoire ou le blanchiment au fauteuil.

          Le blanchiment fonctionne par l’application d’un gel de blanchiment dentaire qui va servir d’agent blanchissant en agissant sur l’émail à la surface de la dent et la dentine, située juste en dessous.

          À l’aide d’une lampe LED pour blanchiment ou bien du LASER nos praticiens optimisent la pénétration de l’agent blanchissant composé essentiellement de peroxyde, ce gel ne touchera pas la pulpe de la dent car dosé avec précision par nos dentiste.</p>
          <div className='ambul'>
          <img className='img11' src={img11}></img>
          <p>Le blanchiment ambulatoire vient souvent en complément du blanchiment au fauteuil mais peut être effectué seul.

          Il s’agit d’un traitement effectué chez soi. Nos dentistes réalisent une empreinte de vos dents afin de créer à partir de celle-ci des gouttières, souples et sur-mesure, qui seront ensuite remplies de produit blanchissant et portées durant une période déterminée par nos praticiens, de façon stricte et sous contrôle médical.</p>
</div>
    </motion.div>
  )
}

export default Blanchiment
