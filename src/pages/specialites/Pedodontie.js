import React from 'react'
import img9 from './images/pedodonti-1.jpg'
import './styles/Pedodontie.css'
import { motion } from "framer-motion/dist/framer-motion";
function Pedodontie() {
  return (
    <motion.div className='pedo'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    >
      
      <img className='img9' src={img9}></img>
      <h1>Pédodontie : dentisterie pédiatrique</h1>
    <p>
Les caries sur dents de lait ne sont pas à négliger. Même si la dent est destinée à tomber et à être remplacée par une dent définitive, une carie peut entraîner des complications. Une dent de lait cariée peut en effet contaminer la dent définitive. Il est donc important de consulter un chirurgien-dentiste dès l’enfance afin de détecter et soigner les caries au plus tôt.
<br></br>
Les dents des enfants doivent être traitées avec autant d’attention que celle des adultes. Plus fragiles, les dents de lait peuvent facilement se carier. Par ailleurs, elles sont souvent en contact avec une alimentation sucrée, ce qui accroit la prolifération des bactéries.
<br></br>
Notre cabinet a donc pensé à ses petits patients en leur procurant le scellement des sillons ou Sealant,Il s’agit d’un soin préventif à pratiquer sur l’enfant afin de protéger les molaires; Ce traitement consiste à poser un ciment de protection qui isole la dent et protège des caries. Il est indolore et recommandé dès 6 ans lors de l’apparition des premières molaires définitives.</p>
    </motion.div>
  )
}

export default Pedodontie
