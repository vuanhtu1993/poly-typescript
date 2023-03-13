// Array
const arr = ["a", "1", "false"];
// Nested Array
const arr3 = [["a", "b", "c"], ["d", "e", "f"]];
const arr5 = ["d", "e", "f"];
// Tuple
const arr2 = ["a", 1, true];
console.log(typeof arr2);
const arr4 = [["a", 1, true], ["b", 2, true]];
// Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
const trangthai = STATUS.FULFILLED;
// console.log(trangthai);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 201] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 202] = "SERVER_ERROR";
})(CODE || (CODE = {}));
