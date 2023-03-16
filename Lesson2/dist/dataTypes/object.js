// Interface
// interface User {
//     id: number,
//     username: string,
//     password: string,
//     email: string,
// }
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["MANAGER"] = 0] = "MANAGER";
    LEVEL[LEVEL["STAFF"] = 1] = "STAFF";
})(LEVEL || (LEVEL = {}));
// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }
// // Properties
// interface User {
//     // union type
//     id: string | number,
//     username: string,
//     password: string,
//     email: string,
// }
// // Method
// interface User {
//     login: () => void,
//     logout: () => void
// }
// interface Admin extends User {
//     id: string,
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }
