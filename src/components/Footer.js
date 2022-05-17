import React from 'react'
import { Instagram,Facebook,Twitter} from '@mui/icons-material'
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
//import '../style/Footer.css'
import '../style/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>Nos services</h4>
            
              <Link to="/apropos"><a>Cabinet dentaire El-Hayat</a></Link>
              <Link to="/endodontie"><a>Spécialités</a></Link>
              <Link to="/blanchiment"><a>Esthétiques</a></Link>
            
          </div>
          <div className='footer-col'>
            <h4>Infos de contact</h4>
            
            <a href ="#"><LocationOnIcon/> N:29 Hai-Khemisti Bir-Eldjir Oran</a>
               <a href='tel:0556954596'> <PhoneIcon/>+213(0)41713055</a>
              <a href ="tel:0556954658"><PhoneIphoneIcon/>+213(0)556954596</a>
              <a href ="mailto:oumerassia@gmail.com"><MailIcon/> Notre E-mail</a>
            
          </div>
          <div className='footer-col'>
            <h4>Réseaux sociaux</h4>
            <div className='social-links'>
           <Link to='https://www.instagram.com'><Instagram/> </Link> 
           <Link to='https://www.Facebook.com'> <Facebook/></Link>
           <Link to='https://www.Twitter.com'><Twitter/></Link>
            
              
              </div>
            
          </div>
        </div>
      </div>
    </div>




    /*<div className='footer'>

            <div className='socialmedia'>
            <Instagram/>
            <Facebook/>
            <Twitter/>
            </div>
            <p> &copy; dental.com</p>
      
  </div>*/
  )
}

export default Footer
