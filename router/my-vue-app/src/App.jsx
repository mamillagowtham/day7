import React from 'react'
import { Route,  Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Users from './Users'
import Single from './Single'
import Navbar from './Navbar'

const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element = {<Home/>}/>
        <Route path='/about' element= {<About/>} />
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path  ="/users" element = {<Users/>}/>
        <Route path = "/users:id" element = {<Single/>}/> 
      </Routes>
    </div>
  )
}

export default App