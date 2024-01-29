import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Forms from './Forms'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<Forms/>}/>
    </Routes>
  )
}

export default AllRoutes