// Array
const arr1 = [];
let arr2;
console.log(arr2);
// Tuples
const tuple = ['a', 10];
tuple.push("c");
tuple.push("c");
console.log(tuple);
// Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULLFILLED"] = 2] = "FULLFILLED";
})(STATUS || (STATUS = {}));
const trangthai = STATUS.PENDING;
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(CODE || (CODE = {}));
const statusCode = CODE.CLIENT_ERROR;
// Object
const obj = {
    name: "Anh Tu",
    age: 20
};
const course1 = {
    name: "typescript",
    time: 34,
    fee: true
};
console.log(course1);
