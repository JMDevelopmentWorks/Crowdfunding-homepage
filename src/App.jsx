import React, { useState } from 'react'
import { Navbar, Button, Homepage } from './components'
import './App.scss'
import { Routes,Route } from 'react-router'

function App() {
 

  return (
    <div className="app">
        




        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Routes>
    </div>
  )
}

export default App
