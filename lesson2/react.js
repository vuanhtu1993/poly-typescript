const root = ReactDOM.createRoot(
    document.getElementById('app')
);

const products = [
    {id: 1, name: "San pham 1", price: 1000},
    {id: 2, name: "San pham 2", price: 500},
    {id: 3, name: "San pham 3", price: 600},
    {id: 4, name: "San pham 4", price: 700},
]

const element = products.map(item => 
<li>
    <h2>{item.name}</h2>
    <p>{item.price}</p>
    <button onClick={() => console.log(item.id)}>Delete</button>
</li>
) // JSX

// Render
root.render(element);