// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. Function return
var num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
var func4 = function () {
    console.log("4");
};
var showError = function () {
    var err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log(divide(10));
var showName = function () {
    return;
};
// 4. Rest parameter
// 5. Callback
