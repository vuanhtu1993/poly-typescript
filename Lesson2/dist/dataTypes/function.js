// 1. Function declaration (Khai bao ham)
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
var num1;
// function sum(): number {
//     return;
// }
// function showName(): string {
//     return;
// }
function logger() {
    console.log("Thêm mới thành công");
}
function showError() {
    var error = new Error("Something went wrong!");
    throw error;
}
// const err = showError()
// 3. Function parameter
function sum(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(sum(10, -1));
function showName() {
    return;
}
// 4. Rest parameter
// 5. Callback
