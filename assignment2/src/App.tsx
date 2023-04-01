import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'

// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage/>} />
        <Route path='chi-tiet' element={<h1>Chi tiet san pham</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
