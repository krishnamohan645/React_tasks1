import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../pages/home-screen'
import InvalidScreen from '../pages/invalid-screen'
import ContactSCreen from '../pages/contack'


function NavigationStack() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomeScreen}/>
        <Route path='*' Component={InvalidScreen}/>
        <Route path='/contact' Component={ContactSCreen}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavigationStack
