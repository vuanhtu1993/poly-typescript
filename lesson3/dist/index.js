"use strict";
console.log("Hello world 4");
const btn = document.querySelector("#btn");
// Type guard / Narrowing
// 1. Truthiness 
const handleClick = (element, callback) => {
    // if (element) {
    // element.addEventListener("click", () => {
    //     callback()
    // })
    // }
    element === null || element === void 0 ? void 0 : element.addEventListener("click", () => {
        callback();
    });
};
handleClick(btn, () => {
    console.log("handle click is working");
});
