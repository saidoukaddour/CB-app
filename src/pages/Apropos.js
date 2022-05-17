import React from 'react'
import img1 from '../assests/apropos2.jpg'
import img2 from '../assests/apropos.jpg'
import '../style/Apropos.css'




function Apropos() {
  return (
    <div className='apro'>

          <div id="one">
             <h1>Cabinet dentaire El-Hayat </h1>
          </div>
          
            
          <div id='two'>
             <img className='img1' src={img1}></img> 
          </div>
          
           <div id='three'>
              <p> Notre Cabinet dentaire située à Bir-Eldjir , Oran, a pour mission d’améliorer votre santé dentaire et l’esthétique de votre sourire en prodiguant des soins de dernières générations.

                Nos chirurgiens-dentistes accompagnés d’assistant(e)s dentaires qualifié(e)s  réalisent quotidiennement des traitements de haute qualité, allant du contrôle bucco-dentaire aux traitements les plus complexes : soins dentaires conventionnels, implantologie, orthodontie et dentisterie esthétique répondant ainsi a vos exigences.

                Aussi, la diversité et la complémentarité́ de ces disciplines nous permettent d’offrir une prise en charge globale et personnalisée à chacun de nos patients
              </p>
          </div>       
          
     
      
         
            
          <div id='four'>
              <p> Le Cabinet dentaire El-Hayat dispose d’un plateau technique moderne et très performant composé de 3 salles de soins, 2 salle de chirurgies, 2 salles de stérilisations, 1 salle de radiologie, un laboratoire de prothèse.
              </p>
          </div>


          <div id='five'>
              <img className='img2' src={img2}></img>
         </div>  
         
         
           <div id='six'>
                <ul>L’établissement est doté aussi d’un équipement de dernière génération, notamment :

                            <li>Digora Soredex : imagerie numérique</li>
                            <li>Pièzochirurgie</li>
                            <li>Radio panoramique</li>
                            <li>Scanner dentaire 3D</li>
                            <li>Système endodontique ENDO-MATE</li>
                            <li>CAD-CAM : conception et fabrication assistée par ordinateur</li>
                            <li>Omnicam : Empreinte optique</li>
                            <li>LASER</li>
                            <li>Lampe de blanchiment</li>
                </ul>
            </div>


            <div id='seven'>
               <p>Pour le plus grand confort de nos patient, un parking est réservé uniquement à la patientelle du cabinet dentaire El-Hayat.</p>
             </div>
 
      
      </div>
    
  )
}

export default Apropos

