console.log("Hello world 4");

const btn = document.querySelector("#btn")

// Type guard / Narrowing
// 1. Truthiness 
const handleClick = (element: Element | null, callback: () => void) => {
    // if (element) {
    // element.addEventListener("click", () => {
    //     callback()
    // })
    // }
    element?.addEventListener("click", () => {
        callback()
    })
}

handleClick(btn, () => {
    console.log("handle click is working");
})