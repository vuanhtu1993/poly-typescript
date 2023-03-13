// Object
var obj = {
    name: "Bình",
    age: 20,
    hometown: "Hà Nội"
};
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
// Properties
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
// enum ROLE {STAFF, MANAGER}
// interface Admin extends User {
//     is_admin: boolean,
//     role: ROLE.STAFF | ROLE.MANAGER
// }
