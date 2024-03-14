"use strict";
console.log("Hello world 1");
const btn = document.querySelector("#btn");
// Type guards/ Narrowing
// 1. typeof
// 2. instanceof
// 3. Truthiness narrowing - Boolean negations (!) && ||
const handleClick = (dom, callback) => {
    // typeof
    if (typeof dom == "string") {
        const element = document.querySelector(dom);
        element === null || element === void 0 ? void 0 : element.addEventListener('click', () => {
            // Truthiness
            if (callback) {
                callback(element);
            }
            // callback?.(element)
        });
        // instanceof 
    }
    else if (dom instanceof Element) {
        dom.addEventListener("click", () => {
            if (callback) {
                callback(dom);
            }
        });
    }
};
handleClick("#btn", (element) => {
    console.log(element.textContent);
});
