import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Users from './Users'
import SinglePage from './SinglePage'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/About' element = {<About/>}/>
            <Route path='/Cart' element= {<Cart/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/singlePage'  element={<SinglePage/>}/>
            <Route path='/Navbar' element={<Navbar/>}/>
        </Routes>
    </div>
  )
};

export default AllRoutes