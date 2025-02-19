import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import User from './pages/User/Users'



import UserProfile from './pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes >
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth />} />
      <Route exact path='/Question' element={<Questions />} />
      <Route exact path='/AskQuestion' element={<AskQuestion />} />
      <Route exact path='/Question/:id' element={<DisplayQuestion />} />
      <Route exact path='/Tags' element={<Tags />} />
      <Route exact path='/User' element={<User />} />



      <Route exact path='/User/:id' element={<UserProfile />} />

    </Routes>
  )
}

export default AllRoutes