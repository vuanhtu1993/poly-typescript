const products = [
    {id: 1, name: "San pham 1", price: 100},
    {id: 2, name: "San pham 2", price: 100},
    {id: 3, name: "San pham 3", price: 100},
    {id: 4, name: "San pham 4", price: 100},
]

// Khai bao DOM
const ul = document.querySelector("ul")
let content = ""
products.forEach(item => {
    // Imperative
    // const li = document.createElement('li')
    // const title = document.createElement("h2")
    // title.innerHTML = item.name
    // const price = document.createElement("p")
    // price.innerHTML = item.price
    // li.appendChild(title)
    // li.appendChild(price)
    // ul.appendChild(li)

    // HTML string
    content += `
    <li>
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button class="delete" data-id="${item.id}">Xoa</button>
    </li>
    `
})

ul.innerHTML = content

const btns = document.querySelectorAll(".delete")
btns.forEach(btn => {
    btn.onclick = function() {
        const id = btn.dataset.id
        console.log(id);
    }
})