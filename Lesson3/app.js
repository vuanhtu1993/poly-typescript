const root = ReactDOM.createRoot(document.getElementById('app'));

const products = [
    { name: "San pham 1", price: 100 },
    { name: "San pham 2", price: 200 },
    { name: "San pham 3", price: 300 },
    { name: "San pham 4", price: 400 },
]
const element = <>
    {products.map(item =>
        <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )}
</>;
root.render(element);
