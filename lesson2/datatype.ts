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
let myName: string = "tuva9"
myName = "LinhNV"
console.log(myName.toLowerCase());
// Inference
let name2 = "LinhNV"

// null, undefined
let name3: undefined;
console.log(name3);

// Object type
const user1: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: "tuva",
    age: 31,
    gender: true
}

const user2: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: "HoangTH",
    age: 21,
    gender: true
}

// Array type
const array1 = ["A", "B", "C", "D", 1]
const array2: string[] = ["A", "B", "C", "D", "E"]
const array3: Array<number> = [1, 2, 3, 4, 5, 6]

// Interface type
interface User {
    name: string,
    age: number,
    gender: boolean,
    role: number
}
// const user3: User = {
//     name: "ToiNH",
//     age: 21,
//     gender: true
// }

// Enum type
// Role 1 là quản trị, 0 là khách hàng, 2 là superAdmin
enum ROLE {
    "USER" = 1,
    "ADMIN",
    "SUPERADMIN",
}

const user4: User = {
    name: "VietVT",
    age: 21,
    gender: true,
    role: ROLE.USER
}

console.log(user4);

// Tuple
const tuple1: [string, number, boolean, number] = ["tuva", 31, true, ROLE.ADMIN]

