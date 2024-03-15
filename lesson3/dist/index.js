"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["NOTFOUND"] = 404] = "NOTFOUND";
    STATUS[STATUS["INTERNAL SERVER"] = 500] = "INTERNAL SERVER";
})(STATUS || (STATUS = {}));
console.log("Hello world 2");
// Type guard/ Narrowing
// 1. Truthiness - Check null and undefined (if else - ? - &&)
// 2. Type checked
// - typeof
// - instanceof
const btn = document.querySelector("#btn");
// btn?.addEventListener("click", () => {
//     alert(btn.textContent)
// })
const handleClick = (element, callback) => {
    if (typeof element == "string") {
        const dom = document.querySelector(element);
        dom === null || dom === void 0 ? void 0 : dom.addEventListener("click", () => {
            callback();
        });
    }
    else if (element instanceof Element) {
        element === null || element === void 0 ? void 0 : element.addEventListener("click", () => {
            callback();
        });
    }
};
handleClick(btn, () => {
    alert("handle click is working");
});
