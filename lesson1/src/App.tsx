import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Header >
        <Navigation />
      </Header>
      <button onClick={console.log}>Click me</button>
    </>
  )
}

// Children
const Header = (props: { children: React.ReactElement }) => {
  return <>
    <h1>Header</h1>
    {/* Logo: POLYBAR */}
    {props.logo}
    {props.children}
  </>
}

const Header2 = () => {
  return <h1>Header2</h1>
}

const Navigation = () => {
  return <ul>
    <li><a href="">Menu 1</a></li>
    <li><a href="">Menu 2</a></li>
    <li><a href="">Menu 3</a></li>
  </ul>
}

export default App
