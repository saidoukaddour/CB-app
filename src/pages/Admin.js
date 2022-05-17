import { Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import '../style/Admin.css'
import { Message } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Admin() {

  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')

  const [message,setmessage]=useState('')


  let navigate=useNavigate();

  
  const login=()=>{
    axios.post('http://localhost:3005/login',{
      username:username,
      password:password
    }).then((response)=>{
    
      if(response.data.length===0){
       setmessage('password or username not valide')
       localStorage.removeItem('user')
      }
      else {
        setmessage('login successful')
        localStorage.setItem('user','true')
       navigate("/admin/dash")
        
      }
     
   })
  }
  return (
    <div className='admin'>
    <h2> Connectez-vous!</h2>
      <div className='container'>
      <form >
      <label> Pseudo:</label>
      <input name="pseudo" type="text" placeholder='Entrez votre pseudo' required onChange={(e)=>{setusername(e.target.value)}} /> 
      <label> Mot de passe:</label>
      <input name="motdepasse" type="password" placeholder='Entrez votre mot de passe' required onChange={(e)=>{setpassword(e.target.value)}} /> 
      <Button className='submit'  onClick={login}>LOGIN</Button>
      </form>
     {message}
      </div>
    </div>
  )
}

export default Admin
