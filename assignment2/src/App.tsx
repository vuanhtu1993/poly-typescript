import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header'
import UserLayout from './components/userLayout';
import Home from './pages/home';


function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
