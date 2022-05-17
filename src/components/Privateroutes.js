import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth=()=>{
    const user=localStorage.getItem('user')
    if (user){
      return true  
    }
    else {
        return false
    }
     
}

const Privateroutes=(props)=> {

    const auth=useAuth()
  return auth ? <Outlet/> : <Navigate to='/admin'/>
    
  
}

export default Privateroutes
