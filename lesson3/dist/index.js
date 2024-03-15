"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["NOTFOUND"] = 404] = "NOTFOUND";
    STATUS[STATUS["INTERNAL SERVER"] = 500] = "INTERNAL SERVER";
})(STATUS || (STATUS = {}));
console.log("Hello world 2");
