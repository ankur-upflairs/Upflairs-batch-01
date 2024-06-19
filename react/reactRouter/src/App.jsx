import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import Wd from './component/Wd'
import AppDevelopment from './component/AppDevelopment'
import User from './pages/User'
import SingleUser from './component/SingleUser'

function App() {


  return (
    <>
      <BrowserRouter>
        <ul>
          <li><NavLink to={''} >Home</NavLink></li>
          <li><NavLink to={'services'} >Services</NavLink></li>
          <li><NavLink to={'contact'} >Contact</NavLink></li>
          <li><NavLink to={'user'} >User</NavLink></li>
        </ul>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='services' element={<Services />}>
            <Route path='wd' element={<Wd />} />
          </Route>
          <Route path='services/app' element={<AppDevelopment/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='user' element={<User/>}/>
          <Route path='user/:id' element={<SingleUser/>}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
