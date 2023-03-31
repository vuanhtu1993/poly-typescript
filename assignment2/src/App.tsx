import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import UserLayout from './components/userLayout'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}> {/* Layout */}
        <Route index element={<h1>Trang chu</h1>}/>
        <Route path='/detail' element={<h1>Chi tiet</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
