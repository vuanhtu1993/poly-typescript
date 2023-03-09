// Array
const arr: Array<number> = [1,2,3]

const arr2: Array<string> = ["a", "b", "c"]

const arr3: Array<Array<string>> = [["a", "b", "c"], ["d", "e"]]

// Tuples
const tuple: [string, string, number] = ["Le Duy", "Ha Noi", 20]

// Enum
enum ROLE {ADMIN, USER}

const role: ROLE = ROLE.ADMIN
// console.log(role);

enum STATUS_CODE {SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR}
const code = STATUS_CODE.SUCCESS

const showInfo = (name: string | number, age: number | string) => {
    if (typeof name == "string") {
        console.log(name.toUpperCase());
    }
    
}

showInfo("Duy", "20")