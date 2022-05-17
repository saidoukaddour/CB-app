import React from 'react'
import img from './images/Endodoncia.jpg'
import './styles/Endodontie.css'
import { motion } from "framer-motion/dist/framer-motion";
function Endodontie() {
  return (
    <motion.div className='endo'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <img className='img' src={img}></img>
    <h1>Endodontie : des soins réalisés dans un objectif de pérennité</h1>
    <p>
L’endodontie est spécialisé dans le diagnostic, la prévention et le traitement des maladies de la pulpe dentaire et des tissus entourant la racine d’une dent pour les patients de tous âges.</p>
<br></br>
<p>
Dans notre cabinet, nos endodontistes hautement qualifiés sont formés pour effectuer différents traitements endodontiques, notamment le retraitement du canal radiculaire et le traitement chirurgical à l’aide des technologies les plus récentes nous disposons d’un plateau techniques moderne utilisant les dernières innovations : loupes , instruments en nickel titane , des moteur de préparation en rotation continues , les techniques d’imagerie moderne (scanner dentaire) tout en respectant les standards internationaux d’hygiène et d’asepsie.</p>
<h1>Le traitement endodontique</h1>
<p>
Le traitement de canal, aussi appelé traitement endodontique (dévitalisation), est nécessaire quand la pulpe de la dent est infectée suite à une carie importante, des fissures à l’émail ou un traumatisme (choc). Si la pulpe inflammée ou infectée n’est pas traitée, cela peut causer des douleurs ou conduire à un abcès.
<br></br>
Ce traitement consiste donc à enlever la pulpe infectée des canaux où elle loge, à désinfecter tout le système de canaux de la dent, à élargir le canal principal et à obturer le réseau canalaire (le remplir et le sceller). La dent est ensuite reconstituée soit avec une obturation coronaire ou avec une couronne.
</p>
<h1>Le retraitement endodontique</h1>
<p>
Le retraitement est fait lorsque le traitement initial apparaît inadéquat ou a échoué, ou lorsque le réseau canalaire a été contaminé par une exposition prolongée à l’environnement intra-oral il consiste à éliminer tous les matériaux d’obturation canalaire et à refaire le nettoyage, la mise en forme et l’obturation des canaux.</p>
    </motion.div>
  )
}

export default Endodontie
