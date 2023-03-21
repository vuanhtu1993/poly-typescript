// Cai dat babel
// Bước 1: npm install -g @babel/core @babel/cli
// Bước 2: npm install @babel/preset-react
// Bước 3: npx babel <ten file> -w -o <ten file>

const products = [
    {id: 1, name: "San pham 1", price: 100},
    {id: 2, name: "San pham 2", price: 100},
    {id: 3, name: "San pham 3", price: 100},
    {id: 4, name: "San pham 4", price: 100},
]

// React hoat dong ntn
// Buoc 1: Khai bao DOM
const root = document.querySelector("#root")
// Buoc2: React DOM
const reactRoot = ReactDOM.createRoot(root);
// Buoc 3: Render
// JSX
const list = products.map(item => 
<li>
    <h2>{item.name}</h2>
    <p>{item.price}</p>
    <button onClick={() => console.log(item.id)}>Xoa</button>
</li>
)
reactRoot.render(list)