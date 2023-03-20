// import React
// import React, { ReactDOM } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// DOM declaration
const root = document.querySelector("#root")
// Create React DOM
const reactRoot = ReactDOM.createRoot(root)
// Render
reactRoot.render(<App/>)