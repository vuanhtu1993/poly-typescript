// Array
const arr = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [["a", "b", "c"], ["d", "e"]];
// Tuples
const tuple = ["Le Duy", "Ha Noi", 20];
// Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
const role = ROLE.ADMIN;
// console.log(role);
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 401] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
const code = STATUS_CODE.SUCCESS;
const showInfo = (name, age) => {
    if (typeof name == "string") {
        console.log(name.toUpperCase());
    }
};
showInfo("Duy", "20");
