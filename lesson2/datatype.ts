// Datatype trong javascript
// Primitive type
// Number, string, boolean, null, undefined, symbol
// Non-primitive
// Object, Array, Function


// Datatype trong Typescript
// Primitive
// String, number, boolean
// Anotation type
let name1: string = "tuva9"
// name1 = 100
// // Inference type
let name2 = "HoangNguyen"
// name2 = 100
let name3: string;
// Null undefined
let var3: string | null; // Union type
let var4: string | null | undefined | number; // Union type
var4 = 10
var4 = "ABC"
var4 = null

// Object
const user1: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: "HoangNguyen",
    age: 21,
    gender: true
}

const user2: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: "DungNguyen",
    age: 21,
    gender: true
}
// Interface
interface User {
    name: string,
    age: number,
    gender: boolean,
    role: number
}

// const user3: User = {
//     name: "PhucLQ",
//     age: 21,
//     gender: true
// }

// Array
const array1: string[] = ["A", "B", "C", "D"]
const array2: Array<number> = [1, 2, 3, 4, 5]

// Enum
// user3.role = 1 //ADMIN
enum ROLE {
    "USER" = 10,
    "ADMIN",
    "SUPERADMIN",
    "SALE"
}

const user4: User = {
    name: "HuanHC",
    age: 21,
    gender: true,
    role: ROLE.SUPERADMIN
}

console.log(user4);

// Tuple
const tuple1: [string, number, boolean, number] = ["tuva9", 31, true, ROLE.SUPERADMIN]

// Any
let var1: any;
var1 = 10;
var1 = "string"
var1 = {

}