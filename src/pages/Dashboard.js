import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/Dashboard.css'

function Dashboard() {

const [list,setlist]=useState([])
const [x,setx]=useState('gvhgvhg')


  useEffect(()=>{
 
    axios.get("http://localhost:3005/selectdata").then((Response)=>{
      setlist(Response.data)
      console.log(Response)
      
    })
},[])

  
  const columns=[
    {
    title:'Nom',field:'nom',type: 'text',filterPlaceholder:'Entrez un nom',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
    },
    {
      title:'Prénom',field:'prenom',type: 'text',filterPlaceholder:'Entrez un prénom',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
      },
    {
      title:'Email',field:'email',filterPlaceholder:'Entrez un email', type: 'email' ,headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
      },
      {
        title:'Telephone',field:'phone', type: 'text',filterPlaceholder:'Entrez le numero ',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
        },
      {
        title:'Date',field:'date', type: 'date', defaultSort: "asc",filterPlaceholder:'Entrez une date',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
        },
       
          {
            title:'Motif de Consultation',field:'motif',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
            },
            {
              title:'Heure',field:'time', type: 'time', defaultSort: "asc",filterPlaceholder:'Entrez lheure',headerStyle:{background:"rgb(0, 0, 0)",color:"white"}
              }
  ]


  
  let navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem('user')
    navigate("/admin")
  }


  return (
    <div className='dash'>
    <h1>Dashboard </h1>
      <MaterialTable title="Mon agenda"  style={{width:'80%'}}
       
      data={list}
      columns={columns}

      editable={{
        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
          const updatedrows=[...list,newRow]
          
          setTimeout(()=>{
            axios.post('http://localhost:3005/insert/rendezvous',{
              nom :newRow.nom,
              prenom :newRow.prenom,
              email :newRow.email,
              phone :newRow.phone,
              date :newRow.date,
              time :newRow.time,
              motif :newRow.motif
            })

            setlist(updatedrows)
          resolve()
          },1000)

        }),



        onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
          const index=oldRow.tableData.id;
          const updatedRows=[...list]
          updatedRows[index]=updatedRow
          setTimeout(()=>{
          setlist(updatedRows)
            resolve()
            },1000)
         
        }),



        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          
            const index=selectedRow.tableData.id;
         const updaterows=[...list]
         updaterows.splice(index,1)
         const key=selectedRow.phone
         setTimeout(()=>{
           
           axios.delete(`http://localhost:3005/deleterendezvous/${key}`)
        setlist(updaterows)
        resolve()
        },1000)

        }),
        //headerStyle:(background:"rgb(0, 212, 212)",fontStyle:'italic')
      }}
      
      
      
      options={{
        sorting:false,
        search:true,
        // searchAutoFocus:true,
        paging:true,
       paginationType:"stepped",
        filtering:true,
        
        paging:true,
        paginationType:"stepped",
        exportButton:true,
        exportAllData:true,
        actionsColumnIndex:-1,
        selection: true,
        
        
        
      }}
      
      />

      <button onClick={logout}>log out </button>
     


      
     
    </div>
  )
}

export default Dashboard
