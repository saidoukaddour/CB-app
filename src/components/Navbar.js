import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.jpg'
import '../style/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
        const [openlist,setopenlist]=useState(false);
function click(){
        setopenlist(true);
}

function click2(){
        setopenlist(false);
}
    const [openlinks,setopenliks]=useState(false);

   

    
    function toggleNavbar(){
            setopenliks(!openlinks)
    }
  return (
    <div className='navbar'>

            <div className='leftSide' id={openlinks ? "open" :"close"}>

                    <Link to='/'> <img src={logo}/></Link>
                    <div className='hiddenLinks'>

                            <Link to='/'>Accueil</Link>
                            <Link to='/rendezvous'>RendezVous</Link>
                            
                    </div>
            </div>

            <div className='rightSide'>

                        

                        <Link to='/'>Accueil</Link>
                        <Link to='/apropos'>À Propos</Link> 
                        <div className='dropdown'>
                        
                        <Link to='#' >Spécialités</Link>
                         
                         <div className='list'>
                                 
                                 
                         <Link to="/endodontie">Endodontie</Link>
                                                        
                         <Link to="/odontologie">Odontologie conservatrice</Link>
                                                 
                                                 
                         <Link to="/protheses">Prothèses</Link>
                                                 
                                                 
                         <Link to="/orthodontie">Orthodontie</Link> 
                                                          
                                                
                         <Link to="/parodontie">Parodontie</Link>
                                                 
                                                 
                         <Link to="/pedodontie">Pédodontie</Link>
                                 
                                 
                         </div>
                 </div>
                        


                        <div className='dropdown'>
                        
                               <Link to='#' >Esthétiques</Link>
                                
                                <div className='list'>
                                        
                                        
                                        <Link to="/blanchiment">Blanchiment des dents</Link>
                                        
                                        <Link to="/facette">Facette dentaire</Link>
                                        <Link to="/rehabilitation">Réhabilitation complète du sourire</Link>
                                        
                                        
                                </div>
                        </div>
                                

                        

                        <Link to='/contact'>Contactez-nous</Link>
                        <Link to='/rendezvous' id='rdv'>Rendez-vous</Link>
                        

                        

                    
                    
                    
                    
                    
                    
                    <button onClick={toggleNavbar}>
                    <ReorderIcon />
                    </button>
            </div>
      
    </div>
  )
}

export default Navbar
