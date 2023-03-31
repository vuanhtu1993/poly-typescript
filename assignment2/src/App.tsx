import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<h1>Trang chủ</h1>}/>
        <Route path='detail' element={<h1>Chi tiết</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
