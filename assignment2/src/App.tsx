import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'
import HomePage from './pages/homepage'

// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}> {/* user layout */}
        <Route index element={<HomePage/>}/> 
        <Route path='chi-tiet' element={<h1>Chi tiet</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
