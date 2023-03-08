// Array
const arr: Array<string> = ["a", "1", "false"]

// Nested Array
const arr3: string[][] = [["a", "b", "c"], ["d", "e", "f"]]

const arr5: string[] = ["d", "e", "f"]
// Tuple
const arr2: [string, number, boolean] = ["a", 1, true]
console.log(typeof arr2);

const arr4: Array<[string, number, boolean]> = [["a", 1, true], ["b", 2, true]]

// Enum
enum STATUS {PENDING, REJECTED, FULFILLED}

const trangthai: STATUS = STATUS.FULFILLED

// console.log(trangthai);

enum CODE {SUCCESS = 200, CLIENT_ERROR, SERVER_ERROR}


