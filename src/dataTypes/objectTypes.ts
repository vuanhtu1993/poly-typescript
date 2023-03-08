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