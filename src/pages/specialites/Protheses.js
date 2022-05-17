import React from 'react'
import img3 from './images/couronne-dentaire-prothese-amovible.jpg'
import img4 from './images/brige-dentaire-prothese-amovible.jpg'
import './styles/Protheses.css'
import { motion } from "framer-motion/dist/framer-motion";
function Protheses() {
  return (
    <motion.div className='pro'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
      
      <img className='img3' src={img3}></img>
      <h1>Couronne dentaire</h1>
    <p>
Les couronnes dentaire sont utilisées en dentisterie esthétique pour recouvrir des dents abîmées, fracturée, dévitalisées (mortes) ou sévèrement cariées et qui n’ont plus assez de structure dentaire saine pour recevoir un nouveau composite ou supporter une facette.
<br></br>
Les couronnes dentaire fournissent un aspect visuel esthétique et des fonctions similaires à une dent naturelle, elle sont aussi résistantes et solides que les dents naturelles, ce qui permet de redonner une mastication quasi normale.
<br></br>
Les couronnes dentaire sont collées (cimentées) en bouche de façon définitive, contrairement aux prothèses amovibles, telles que les dentiers complets ou les partiels étant donné qu’elles sont fixes en bouche, elle sont plus stables que les autres types de prothèses.</p>
<div className='bridge'>
<img className='img4' src={img4}></img>
<h1>Bridge dentaire</h1>
<p>
Le bridge est une prothèse dentaire qui est fixée sur les dents voisines à une ou plusieurs dents manquantes. Avant la mise en place du pont, le dentiste doit préalablement réduire le volume de ces dernières et, au besoin, les dévitalises si elles sont abîmées.
<br></br>
Sur le plan esthétique, le bridge dentaire présente l’avantage d’avoir des teintes très proches de celles des vraies dents. Il permet ainsi de retrouver un beau sourire et de mastiquer sans gêne.</p>
<h1>Inlay core</h1>
<p>
L’inlay core, appelé aussi dent sur pivot, est une prothèse qui permet  de reconstruire la partie visible d’une dent et qui sert de support pour la mise en place d’une couronne. Lorsqu’une dent est abîmée par une carie ou une fracture, il devient impossible de poser une couronne sur le fragment de la dent restante.

L’inlay core va être réalisé pour consolider la dent. Dans ce cas nos praticiens prodiguent la réalisation ou mise en place d’un inlay-core pour la consolidation de la dent. Il s’agit en fait d’une pièce métallique ancrée dans la racine et dont la partie supérieure va servir de support à la future couronne.

C’est pour cela qu’on l’appelle communément « faux-moignon » ou « dent sur pivot »</p>
</div>
    </motion.div>
  )
}

export default Protheses
