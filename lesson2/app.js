const app = document.querySelector("#app")

const products = [
    {id: 1, name: "San pham 1", price: 1000},
    {id: 2, name: "San pham 2", price: 500},
    {id: 3, name: "San pham 3", price: 600},
    {id: 4, name: "San pham 4", price: 700},
]

let content = ""
products.forEach((item) => {
    // Imperative
    // const product = document.createElement('li')
    // const title = document.createElement('h2')
    // title.innerHTML = item.name
    // const price = document.createElement('p')
    // price.innerHTML = item.price
    // product.appendChild(title)
    // product.appendChild(price)
    // app.appendChild(product)
    content += `
    <li>
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button data-id="${item.id}" class="delete">Xoa</button>
    </li>
    ` 
})

app.innerHTML = content

const btns = document.querySelectorAll(".delete")
btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        const id = btn.dataset.id
        console.log(id);
    })
})