import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Page/Login'
import Upload from '../Page/Upload'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/upload' element={<Upload/>}/>
      {/* <Route path='/remove' element={<Login/>}/> */}
    </Routes>
  )
}

export default AllRoutes
