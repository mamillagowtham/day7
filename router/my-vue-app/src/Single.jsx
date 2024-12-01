import React, { useEffect, useState } from 'react';

const Single = () => {

    const [data,setData] = useState({});
   
    useEffect(()=>{
       const fun = async ()=>{
        try{
               const response = await fetch(`https://reqres.in/api/users/ ${id }`);
               const data = await response.json();
               console.log(data);
        }
        catch(error){
            console.log(error);
            setData(data.data);
        }
       }
   
   fun() },[ ]);
  return (
    <div>
       <img src={ data.avatar} alt="" />
       <p>{data.first_name}</p>
       <Link to = "/users"></Link>
    </div>
  )
}

export default Single;