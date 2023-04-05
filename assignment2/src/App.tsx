import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header'
import UserLayout from './components/userLayout';
import Home from './pages/home';
import Signup from './pages/signup';
import Signin from './pages/signin';


function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
