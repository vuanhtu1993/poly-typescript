"use strict";
console.log("Hello world 4");
const btn = document.querySelector("#btn");
// Type guard / Narrowing
// 1. Truthiness 
// 2. Type checked
// - instanceof 
// - typeof
const handleClick = (element, callback) => {
    if (typeof element == "string") {
        const dom = document.querySelector(element);
        dom === null || dom === void 0 ? void 0 : dom.addEventListener('click', () => {
            callback();
        });
    }
    else if (element instanceof Element) {
        element === null || element === void 0 ? void 0 : element.addEventListener("click", () => {
            callback();
        });
    }
};
handleClick("#btn", () => {
    console.log("handle click is working");
});
