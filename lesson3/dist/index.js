"use strict";
console.log("index file 2");
function sum(a, b) {
    return a + b;
}
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log("abc");
});
