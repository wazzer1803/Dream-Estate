import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn'
import Profile from './pages/profile'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
export default function App(){
  return (
   <BrowserRouter>
    <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route element={<PrivateRoute/>}>
     <Route path="/profile" element={<Profile/>}/>
     </Route>
     <Route path="/about" element={<About/>}/>
     
   </Routes>
   
   
   
   </BrowserRouter>
  )
}


