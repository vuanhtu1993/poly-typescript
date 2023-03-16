// DOM declaration
const root = document.querySelector('#root')

const products = [
    { name: "san pham 1", price: 100, id: 1 },
    { name: "san pham 2", price: 100, id: 2 },
    { name: "san pham 3", price: 100, id: 3 },
    { name: "san pham 4", price: 100, id: 4 },
]

let content = ""
products.forEach(product => {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    title.innerHTML = product.name
    const price = document.createElement('p')
    price.innerHTML = product.price
    container.appendChild(title)
    container.appendChild(price)
    root.appendChild(container)
    content += /*html*/`
    <div>
        <h2>${product.name}</h2>
        <p>${product.name}</p>
    </div>
    ` 
})

root.innerHTML = content
  