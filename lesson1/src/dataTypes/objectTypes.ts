// Array
const arr: Array<string> = ["a", "b", "c"]

const arr2: number[][] = [[1, 2, 3], [4,5,6]]

const arr3: string[] = ["1","2","3"]

// any
let str3: any = 10
str3 = "Hello world"
str3 = [1,2,3]

// Tuples
const tuple: [string, string, number] = ["DatNV", "Hoai Duc", 20]

// Enum
enum STATUS {PENDING, REJECTED, FULFILLED}

const trangthai1: STATUS = STATUS.PENDING
console.log(trangthai1);

enum CODE {SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR}

