const products = [
    { id: 1, name: "san pham 1", price: 100 },
    { id: 2, name: "san pham 2", price: 100 },
    { id: 3, name: "san pham 3", price: 100 },
    { id: 4, name: "san pham 4", price: 100 },
    { id: 5, name: "san pham 5", price: 100 },
]

const root = document.querySelector("#table")

const reactRoot = ReactDOM.createRoot(root)

// JSX
const element = products.map(item => 
<tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td><button onClick={() => console.log(item.id)}>Xoa</button></td>
</tr>
)

reactRoot.render(element)

// Cai dat babel
// npm install --save-dev @babel/preset-react
