console.log("Hello world 4");

const btn = document.querySelector("#btn")

// Type guard / Narrowing
// 1. Truthiness 
// 2. Type checked
// - instanceof 
// - typeof
const handleClick = (element: Element | string | null, callback: () => void) => {
    if (typeof element == "string") {
        const dom = document.querySelector(element)
        dom?.addEventListener('click', () => {
            callback()
        })
    } else if (element instanceof Element) {
        element?.addEventListener("click", () => {
            callback()
        })
    }

}

handleClick("#btn", () => {
    console.log("handle click is working");
})