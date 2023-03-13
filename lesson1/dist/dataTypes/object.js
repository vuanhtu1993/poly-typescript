// Object declaration
// Object literal
var sinhvien = {
    name: "Nam Cuong",
    age: 20
};
var sinhvien2 = {
    name: "Thành",
    age: 20
};
// Example
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
// // Properties
// interface User {
//     username: string,
//     password: string,
//     email: string,
// }
// // Methods
// interface User {
//     login: () => void,
//     logout: () => void
// }
// interface Admin extends User {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
// type User = {
//     username: string,
//     password: string,
//     email: string,
//     login: () => void,
//     logout: () => void,
// }
// type Admin = User & {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
