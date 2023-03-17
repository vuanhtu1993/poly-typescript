const root = ReactDOM.createRoot(document.querySelector("#app"))

const products = [
    {id: 1, name: "San pham 1", price: 100},
    {id: 2, name: "San pham 2", price: 500},
    {id: 3, name: "San pham 3", price: 400},
    {id: 4, name: "San pham 4", price: 200},
]

const element = products.map(item => 
<div>
    <h2>{item.name}</h2>
    <p>{item.price}</p>
    <a href={`http://localhost:8000/update/${item.id}`}>Link</a>
    <button onClick={() => console.log(item.id)}>Delete</button>
</div>
); // JSX
// render
root.render(element)

