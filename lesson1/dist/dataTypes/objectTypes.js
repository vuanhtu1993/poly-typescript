// Array
var arr = ["a", "b", "c"];
var arr2 = [[1, 2, 3], [4, 5, 6]];
var arr3 = ["1", "2", "3"];
// any
var str3 = 10;
str3 = "Hello world";
str3 = [1, 2, 3];
// Tuples
var tuple = ["DatNV", "Hoai Duc", 20];
// Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.PENDING;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 401] = "SERVER_ERROR";
})(CODE || (CODE = {}));
