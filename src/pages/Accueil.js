import React from 'react'
import { Link } from 'react-router-dom'
import accueil from '../assests/image2.jpg'
import '../style/Accueil.css'
import { motion } from "framer-motion/dist/framer-motion";



function Accueil() {
  return (
    
    <div className='home' style={{backgroundImage:`url(${accueil})`}}>
        <div className='headerContainer'>
          <h1>Cabinet dentaire El-Hayat  </h1>
          <p>Your health is our focus</p>
          <Link to="/rendezvous">
          <button>Prendre Rendez-vous</button>
          </Link>

        </div>
        </div>
     
  )
}

export default Accueil
