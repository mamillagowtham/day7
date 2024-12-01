import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    const links = [{
        path : "/", text : "Home"
    },  
    {
         path : "/about", text : "About"
    },
    {
         path : "/cart", text : "Cart"
    },
    {
         path : "/users", text : "Users"
    }]


    const DefaultStyle = {
        color : "black",
    
    };

    const ActiveStyle = {
        color: "green",
        TextDecoration : "none",
        };

        
  return (
    <div style={{display: 'flex',gap: "10px"}}> 
          {links.map((link)=>{
           return (<NavLink to={link.path} key={link.path} style={({isActive})=> { return  isActive ? ActiveStyle : DefaultStyle}}>
            {link.text}
            </NavLink>)
          })
            
          }
    </div>
  )
}

export default Navbar