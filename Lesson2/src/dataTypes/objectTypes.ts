// Array
const arr: Array<string> = ["a", "b", "c"]

const arrNum: number[] = [1,2,3,4]

const arr2: Array<Array<number>> = [[1,2,3], [4,5,6]]

// Tuples
const tuple: [string, string, number] = ["Van Duy", "Ha Noi", 20]

// Enum
enum ROLE {ADMIN, USER}

const role: ROLE = ROLE.USER
console.log(role);

enum STATUS_CODE {SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR}

const code: STATUS_CODE = STATUS_CODE.CLIENT_ERROR