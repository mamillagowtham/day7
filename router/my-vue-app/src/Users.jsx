import React, { useEffect, useState } from 'react'

const Users = () => {
   const [data,setData] = useState([])

   async function fetchingData()
   {
    try{
          const res  = await fetch("https://reqres.in/api/users/");
          const data = await es.json();
         
          setData(data?.data  || [])
    }  
    catch(error)
    {

    }
   }

   useEffect(()=>{
    fetchingData
   })
  return (
    <div>Users</div>
  )
}

export default Users