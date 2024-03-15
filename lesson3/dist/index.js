"use strict";
console.log("Hello world 4");
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert(btn.textContent);
});
