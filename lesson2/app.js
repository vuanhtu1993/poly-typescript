const products = [
    {id: 1, name: "San pham 1", price: 100},
    {id: 2, name: "San pham 2", price: 500},
    {id: 3, name: "San pham 3", price: 400},
    {id: 4, name: "San pham 4", price: 200},
]

const app = document.querySelector("#app")

let content = ""

products.forEach(item => {
    // Imperative (thủ tục)
    // const product = document.createElement("div")
    // const title = document.createElement('h2')
    // title.innerHTML = item.name
    // const price = document.createElement('p')
    // price.innerHTML = item.price
    // product.appendChild(title)
    // product.appendChild(price)
    // app.appendChild(product)
    content += /*html*/`
    <div>
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button data-id="${item.id}" class="delete">Delete</button>
    </div>
    `
})

app.innerHTML = content

const btns = document.querySelectorAll(".delete")
btns.forEach(btn => {
    btn.onclick = function(e) {
        const id = btn.dataset.id
        console.log(id);
    }
})