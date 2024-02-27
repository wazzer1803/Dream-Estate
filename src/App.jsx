import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/profile'
import About from './pages/About'
import Home from './pages/Home'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/about" element={<About/>}/>
     
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
