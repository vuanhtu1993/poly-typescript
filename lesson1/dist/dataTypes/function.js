// 1. Function return
function demoFunc() {
    // console.log("");
    return;
}
// never
function neverFunc() {
    var error = new Error("Có lỗi xảy ra");
    throw error;
}
var result = demoFunc();
// console.log(result);
// 2. Function parammeter
var showInfo = function (firstName, lastName, midName) {
    return "Tên sinh vien: " + firstName + " " + midName + " " + lastName;
};
// console.log(sum(10, 20));
// Hoisting
function sum(a, b) {
    return a + b;
}
// 3. Optional ?
// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));
// 4. Function declaration
var func2 = function () {
};
var func3 = function () {
};
// 5. Callback
function we17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var numberArr = ["string", "string1", "string2"];
var result1 = we17317_map(numberArr, function (item) {
    return item * 3;
});
console.log(result1);
// 6. Rest Parameter
var showClass = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", ")));
};
showClass("Văn Anh", "Nodejs", "Typescript");
