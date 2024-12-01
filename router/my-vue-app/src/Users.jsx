import React, { useState } from 'react'

const Users = () => {
   const [data,setData] = useState([])

   async function fetchingData()
   {
    try{
          const res  = await fetch("")
    }
    catch(error)
    {

    }
   }
  return (
    <div>Users</div>
  )
}

export default Users