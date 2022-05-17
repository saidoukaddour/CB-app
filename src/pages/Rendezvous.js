import React, { useState } from 'react'
import image from '../assests/image3.jpg'
import '../style/Rendezvous.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Rendezvous() {
  const [nom,setnom]=useState('')
  const [prenom,setprenom]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [date,setdate]=useState('')
  const [time,settime]=useState('')
  const [motif,setmotif]=useState('')
  const [etat,setetat]=useState(true)
  const [checkmessage,setcheckmessage]=useState('')
  const [ms,setms]=useState('')
  
  let navigate=useNavigate();
      const go=()=>{
        if(nom.length!==0 && prenom.length!==0 && email.length!==0 && phone.length!==0 && motif.length!==0){
          axios.post('http://localhost:3005/insert/rendezvous',{
              nom :nom,
              prenom :prenom,
              email :email,
              phone :phone,
              date :date,
              time :time,
              motif :motif
            })
            alert('bingo')
            navigate("/")
        }
            
      }


  

  const check=()=>{
if(date.length!==0 && time.length!==0){
  axios.post('http://localhost:3005/select',{
          date :date,
          time:time
          
        }).then((response)=>{
    
          if(response.data.length===0){
            
            setetat(false)
            setms('la date est disponible  vous devez continue de remplir la formulaire')
            setcheckmessage('')
           
          }
          
          else {
            setetat(true)
            setcheckmessage('non valide')
            setms('')
            
          }
         
       })

       
}

  }
  return (
    
    <div className='rendezvous'>

            <div className='imageside' style={{backgroundImage:`url(${image})`}} >
            
            </div>

            <div className='formside'>
              <h1>VOUS DEVEZ REMPLIR LE FORMULAIRE CI-DESSOUS</h1>
              
             <div className='checkbox'>
              <label>date</label>
              <input name="date" type ="date"  onChange={(e)=>{setdate(e.target.value)}} required />

              <label>heure</label>
              <select name="heure" onChange={(e)=>{settime(e.target.value)}} required >
              <option></option>
              <option>9:00AM</option>
              <option>10:00AM</option>
              <option>11:00AM</option>
              <option>12:00AM</option>
              <option>14:00PM</option>
              <option>15:00PM</option>
              <option>16:00PM</option>
              <option>17:00PM</option>
              <option>18:00PM</option>
              </select>
              <label className='msg'>{checkmessage}</label>
              <button className='check' onClick={check}>check</button>
              
              <span id='two'>{ms}</span>
              
              </div>
              
              <form id="form">
              
                  <label>nom</label>
                  <input name="name"  placeholder='entre votre nom' type ="text" onChange={(e)=>{setnom(e.target.value)}} required />
                  <label>prenom</label>
                  <input name="prenom"  placeholder='entre votre prenom' type ="text" onChange={(e)=>{setprenom(e.target.value)}} required />
                  <label>E-mail</label>
                  <input name="email"  placeholder='entre votre email' type ="email"  onChange={(e)=>{setemail(e.target.value)}} required />
                  <label>numero de telephone</label>
                  <input name="numero"  placeholder='entre votre num' type ="number"  onChange={(e)=>{setphone(e.target.value)}} required />
                  <label>motif</label>
                  <select name="motif"  onChange={(e)=>{setmotif(e.target.value)}} required >
                      <option></option>
                      <option>consultaion</option>
                      <option>blanchiment</option>
                      <option>plombage</option>
                  </select>
                  
                  <button  className='submit' disabled={etat}  onClick={go}>envoyer</button>
             
              </form>
            </div>
    </div>
  )
}

export default Rendezvous
