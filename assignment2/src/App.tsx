import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import UserLayout from './components/userLayout'
import Home from './pages/home'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}> {/* Layout */}
        <Route index element={<Home/>}/>
        <Route path='detail' element={<h1>Chi tiet</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
