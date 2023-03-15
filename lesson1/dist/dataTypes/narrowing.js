// 1. Union type
// typeof
function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
}
// 2. Optional
function optionalFunc(sinhvien) {
    if (sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc();
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("is_admin" in user) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome back");
    }
}
