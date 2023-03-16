import { useState } from 'react'

const products = [
  { name: "san pham 1", price: 100, id: 1 },
  { name: "san pham 2", price: 100, id: 2 },
  { name: "san pham 3", price: 100, id: 3 },
  { name: "san pham 4", price: 100, id: 4 },
]

function App() {

  return (
    <div>
      <h1>tesst</h1>
      <div>
        {products.map(item => 
        <div style={{display: 'flex'}}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => console.log(item.id)}>delete</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default App
