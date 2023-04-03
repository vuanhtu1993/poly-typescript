import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import Signup from './pages/signup'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
