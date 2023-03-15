// 1. Function return
function demoFunc() {
    // console.log("");
    return;
}
// never
function neverFunc() {
    const error = new Error("Có lỗi xảy ra");
    throw error;
}
const result = demoFunc();
// console.log(result);
// 2. Function parammeter
const showInfo = (firstName, lastName, midName) => {
    return "Tên sinh vien: " + firstName + " " + midName + " " + lastName;
};
// console.log(sum(10, 20));
// Hoisting
function sum(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
// 3. Optional ?
// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));
// 4. Function declaration
const func2 = function () {
};
const func3 = () => {
};
// 5. Callback
// function we17317_map(arr: any[], callback?: (item: any) => any) {
//     const temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
const numberArr = ["string", "string1", "string2"];
// const result1 = we17317_map(numberArr, (item) => {
//     return item * 3
// })
// console.log(result1);
// 6. Rest Parameter
const showClass = function (name, ...classes) {
    console.log(`Sinh viên ${name} học lớp ${classes.join(", ")}`);
};
showClass("Văn Anh", "Nodejs", "Typescript");
