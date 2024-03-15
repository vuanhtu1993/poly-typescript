console.log("Hello world 4");

const btn = document.querySelector("#btn")
btn?.addEventListener("click", () => {
    alert(btn.textContent)
})