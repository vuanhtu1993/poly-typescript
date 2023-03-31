import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'
import Home from './pages/home'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='detail' element={<h1>Chi tiết</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
