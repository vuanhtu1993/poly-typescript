import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import ProductDetail from './pages/detail'

// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage/>} />
        <Route path='product/:id' element={<ProductDetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
