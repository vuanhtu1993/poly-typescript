// Array
const arr1: string[][] = []

let arr2: Array<Array<string>>
console.log(arr2);

// Tuples
const tuple: [string, number] = ['a', 10]
tuple.push("c")
tuple.push("c")
console.log(tuple);

// Enum
enum STATUS {PENDING, REJECTED, FULLFILLED}
const trangthai: STATUS = STATUS.PENDING

enum CODE {SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR = 500}
const statusCode: CODE = CODE.CLIENT_ERROR

// Object
const obj: {name: string, age: number} = {
    name: "Anh Tu",
    age: 20
}



interface Course {
    name: string,
    time: number,
    fee: boolean
}

const course1: Course = {
    name: "typescript",
    time: 34,
    fee: true
}

console.log(course1);