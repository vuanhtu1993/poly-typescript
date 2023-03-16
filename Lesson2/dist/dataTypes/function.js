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
// console.log(sum(10, -1));
function showName() {
    return "";
}
// 4. Rest parameter
var showClasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " h\u1ECDc ").concat(classes.join(", "));
};
// console.log(showClasses("Nam", "Nodejs", "Typescript", "Phap Luat"));
// 5. Callback
// const numArr = [5, 10, 15, 20] 
// const result = numArr.map((item, index) => {
//     return item * item
// })
// console.log(result);
// const we17305_map = function(arr: number[], callback?: (item: number) => number) {
//     const temp: number[] = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17305_map(numArr, (item) => {
//     return item * 2
// })
// console.log(result);
