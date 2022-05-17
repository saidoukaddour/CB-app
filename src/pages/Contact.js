import { Email, Instagram, Phone,Facebook, Construction } from '@mui/icons-material'
import React, { useState } from 'react'
import image from '../assests/image7.jpg'
import '../style/Contact.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Contact() {
 

  const [nom,setnom]=useState('')
  const [prenom,setprenom]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [message,setmessage]=useState('')

  let navigate=useNavigate();
  const sendmessage=()=>{
    if(nom.length!==0 && prenom.length!==0 && email.length!==0 && phone.length!==0 && message.length!==0 ){
      axios.post('http://localhost:3005/sendmessage',{
              nom :nom,
              prenom :prenom,
              email :email,
              phone :phone,
              message:message
    })
    alert('bingo')
    navigate('/')
    }
    
  }
  return (
    <div className='contact'>
    
  
           
            <div className='c-imageside' style={{backgroundImage:`url(${image})`}} >
            
            <a href='mailto:oumerassia@gmail.com'><Email/> Elhayat-cabinet@gmail.com</a>
            <br></br>
            <a href='tel:+213556954596'><Phone/> +213(0)556954596</a>
            <br></br>
            <a href='https://www.instagram.com/med_saidou/'><Instagram/> Notre page Instagram</a>
            <br></br>
            <a href='https://www.facebook.com/med_saidou/'><Facebook/> Notre page Facebook</a>
            

  </div>

            <div className='c-formside'>
              <h1>Formulaire de contact</h1>
              
              <form >
                
              <label>Nom:</label>
              <input name="nom" placeholder='Votre nom' type ="text" required onChange={(e)=>{setnom(e.target.value)}} />
              
              <label>Prénom:</label>
              <input name="prenom" placeholder='Votre prenom' type ="text" required onChange={(e)=>{setprenom(e.target.value)}}  />
              <label>Email:</label>
              <input name="email" placeholder='Votre email' type ="e-mail" required onChange={(e)=>{setemail(e.target.value)}} />
              <label>Numéro de téléphone:</label>
              <input name="numero" placeholder='Votre numero' type ="number" required onChange={(e)=>{setphone(e.target.value)}}  />
              <label>Message:</label>
              <textarea name="message" placeholder='Ecrire votre message ici' required onChange={(e)=>{setmessage(e.target.value)}}  ></textarea >
              <button type="submit" onClick={sendmessage}> Envoyer </button>
              
              </form>
            </div>
    </div>
  )
}

export default Contact
