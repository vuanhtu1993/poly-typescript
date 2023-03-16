// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
const func2 = function () {
    console.log("func2");
};
const func3 = () => {
    console.log("func3");
};
// 2. Function return
let num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
const func4 = function () {
    console.log("4");
};
const showError = function () {
    const err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));
const showName = function () {
    return "";
};
// 4. Rest parameter
function printClass(name, ...classes) {
    return `Sinh viên ${name} học lớp ${classes.join(", ")}`;
}
console.log(printClass("Hưng", "Typescript", "Nodejs", "Phap Luat"));
// 5. Callback
// const numArr = [1,2,3,5,8,13] // Fibonacci
// const result = numArr.map((item) => {
//     return item * item
// })
// console.log(result);
// const we17307_map = function(arr: number[], callback?: (item: number) => number): number[] {
//     const temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17307_map(numArr, (item) => {
//     return item * item
// })
