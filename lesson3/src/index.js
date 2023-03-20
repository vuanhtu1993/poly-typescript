// Bước 1: Import React, React-DOM
import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app'

// Bước 2: Khai báo dom
const rootElement = document.querySelector("#root")

// Bước 3: Tạo react dom (Virtual DOM)
const reactRoot = createRoot(rootElement)

// Bước 4: Render

reactRoot.render(
    <StrictMode>
        <App/>
    </StrictMode>
)

// Buoc 1: npm install -g create-react-app
// Buoc 2: npx create-react-app <ten folder>
// Buoc 3: cd <ten folder>
// Buoc 4: npm start