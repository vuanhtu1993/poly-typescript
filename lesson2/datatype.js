// Datatype trong javascript
// Primitive type
// Number, string, boolean, null, undefined, symbol
// Non-primitive
// Object, Array, Function
// Datatype trong Typescript
// Primitive
// String, number, boolean
// Anotation type
var name1 = "tuva9";
// name1 = 100
// // Inference type
var name2 = "HoangNguyen";
// name2 = 100
var name3;
// Object
var user1 = {
    name: "HoangNguyen",
    age: 21,
    gender: true
};
var user2 = {
    name: "DungNguyen",
    age: 21,
    gender: true
};
// const user3: User = {
//     name: "PhucLQ",
//     age: 21,
//     gender: true
// }
// Array
var array1 = ["A", "B", "C", "D"];
var array2 = [1, 2, 3, 4, 5];
// Enum
// user3.role = 1 //ADMIN
var ROLE;
(function (ROLE) {
    ROLE[ROLE["USER"] = 10] = "USER";
    ROLE[ROLE["ADMIN"] = 11] = "ADMIN";
    ROLE[ROLE["SUPERADMIN"] = 12] = "SUPERADMIN";
    ROLE[ROLE["SALE"] = 13] = "SALE";
})(ROLE || (ROLE = {}));
var user4 = {
    name: "HuanHC",
    age: 21,
    gender: true,
    role: ROLE.SUPERADMIN
};
console.log(user4);
