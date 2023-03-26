// Bước 1: import react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// Bước 2: Khai báo DOM
const root = document.querySelector("#root")
// Bước 3: Tạo React DOM
const reactRoot = ReactDOM.createRoot(root)
// Bước 4: Render
reactRoot.render(<App/>)

// Cac buoc cai dat
// 1. npm install -g create-react-app
// 2. npx create-react-app <ten folder>
// 3. Xoa cac thu muc trong src
// 4. Tao file index.js