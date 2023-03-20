// Bước 1: import react
import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
// Bước 2: Khai báo DOM root
const root = document.querySelector("#root")
// Bước 3: Khởi tạo DOM ảo
const reactRoot = ReactDOM.createRoot(root)
// Bước 4: Render
reactRoot.render(
    <StrictMode>
        <App/>
    </StrictMode>
)


// Bước1: npm install -g create-react-app
// Bước 2: npx create-react-app <tên folder>
// Bước 3: cd <tên folder>
// Bước 4: Nếu chưa có node_modules -> npm i
// Bước 5: npm start