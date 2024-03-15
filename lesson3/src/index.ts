enum STATUS {
    "NOTFOUND" = 404,
    "INTERNAL SERVER" = 500,
}

console.log("Hello world 2");

// Type guard/ Narrowing
// 1. Truthiness - Check null and undefined (if else - ? - &&)
// 2. Type checked
// - typeof
// - instanceof

const btn = document.querySelector("#btn")
// btn?.addEventListener("click", () => {
//     alert(btn.textContent)
// })

const handleClick = (element: Element | string | null, callback?: () => void) => {
    if (typeof element == "string") {
        const dom = document.querySelector(element)
        dom?.addEventListener("click", () => {
            callback()
        })
    } else if (element instanceof Element) {
        element?.addEventListener("click", () => {
            callback()
        })
    }


}


handleClick(btn, () => {
    alert("handle click is working")
})