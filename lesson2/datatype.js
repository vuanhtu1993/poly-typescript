// What is datatype ?
// Datatype in javascript (7 kiểu)
// Primitive
// String, Number, Boolean, Null, Underfine, Symbol
// Non Primitive
// Object, Array, Function
// Datatype in Typescript
// Primitive
// string, number, boolean
// Anotation
var myName = "tuva9";
myName = "LinhNV";
console.log(myName.toLowerCase());
// Inference
var name2 = "LinhNV";
// null, undefined
var name3;
console.log(name3);
// Object type
var user1 = {
    name: "tuva",
    age: 31,
    gender: true
};
var user2 = {
    name: "HoangTH",
    age: 21,
    gender: true
};
// Array type
var array1 = ["A", "B", "C", "D", 1];
var array2 = ["A", "B", "C", "D", "E"];
var array3 = [1, 2, 3, 4, 5, 6];
// const user3: User = {
//     name: "ToiNH",
//     age: 21,
//     gender: true
// }
// Enum type
// Role 1 là quản trị, 0 là khách hàng, 2 là superAdmin
var ROLE;
(function (ROLE) {
    ROLE[ROLE["USER"] = 0] = "USER";
    ROLE[ROLE["ADMIN"] = 1] = "ADMIN";
    ROLE[ROLE["SUPERADMIN"] = 2] = "SUPERADMIN";
})(ROLE || (ROLE = {}));
var user4 = {
    name: "VietVT",
    age: 21,
    gender: true,
    role: ROLE.USER
};
console.log(user4);
