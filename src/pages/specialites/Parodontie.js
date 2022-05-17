import React from 'react'
import img7 from'./images/gingivite-medicale.jpg'
import img8 from'./images/rehabilitation-complete-sourire.jpg'
import './styles/Paradontie.css'
import { motion } from "framer-motion/dist/framer-motion";
function Parodontie() {
  return (
    <motion.div className='para'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1>La  parodontologie</h1>
    <p>
La parodontologie est la discipline qui se consacre à la prévention, au diagnostic et au traitement des maladies de la gencive et de l’os sous-jacent. Ces maladies sont  les gingivites et les parodontites ; elles  sont plus connues sous le nom de déchaussement des dents et conduisent à la perte des dents.</p>

<img className='img7' src={img7}></img>
<h1>Gingivite et parodontite</h1>
<p>La gingivite est une inflammation indolore de la gencive qui a lieu lorsque la plaque dentaire et le tartre se déposent en trop grande quantité.
<br></br>
Constituant une porte d’entrée aux bactéries qui colonisent ainsi la gencive, et déclenchent par la suite une inflammation, la gencive gonfle et devient rouge et douloureuse, se décolle laissant pénétrer le tartre sous la gencive .
<br></br>
Si elle n’est pas traitée, la gingivite conduit à la parodontite .
<br></br>
Au stade de parodontite commence la destruction de l’os de la mâchoire et des fibres qui ancrent  les dents ; se forment  alors des poches parodontales dans lesquelles les bactéries s’accumulent , cela conduit au déchaussement des dents et à leur perte .
</p>
<div className='medi'>
<img className='img8' src={img8}></img>
<h1>La parodontie médicale</h1>
<p>
La parodontie médicale est une technique de prise en charge des parodontites. Elle est basée sur l’utilisation intensive d’antiseptiques locaux ainsi que sur la réalisation de séances progressives de débridements supra et sous gingivaux. Au cours de cette approche thérapeutique, l’accent est mis sur la visualisation de la flore parodontale du patient.

À l’aide d’un microscope spécial on procède par un repérage des micro-organismes pathogènes siégeant dans les poches parodontales et qui sont la cause de l’inflammation. Quand l’infection est sous contrôle, le tartre qui se trouve au-dessus et au-dessous du niveau de la gencive sera éliminé par l’utilisation du LASER pour une décontamination profonde et une stimulation des tissus.

Nos spécialistes proposent pour les cas complexes des techniques chirurgicales d’assainissement (lambeaux d’assainissement) ou pour traiter des zones bien localisées.</p>

</div>
    </motion.div>
  )
}

export default Parodontie
