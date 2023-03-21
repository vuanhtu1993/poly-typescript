// Union type
// typeof
function printInfo(info: number | string) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice(1)
    }
    return info
}

// instance
const date = new Date()
function checkDate(date: Date | string) {
    if (date instanceof Date) {
        return date.getDate()
    }
}

// console.log(printInfo("hải"));

// Optional

function check(sinhvien?: {name: string, grade: number}) {
    if (!!sinhvien) {
        return sinhvien.name
    }
}


// Union type (in)
interface User {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}

interface Admin extends User {
    id: string,
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}

function login(user: User | Admin): void {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    } else {
        console.log("Welcome to backs");
    }
}

const numArr2 = [5,3,9, 2,4,1]
const strArr = ["hải", "bhịnh", "ahắng", "phi"]

// numArr2.sort((a, b) => {
//     return b - a
// })
// console.log(numArr2);

function bubbleSort<T>(arr: T[], callback?: (a:T, b:T) => number): void {
    if(!callback) {
        callback = (a: T, b: T) => {
            if(a > b) {
                return 1
            } else {
                return -1
            }
        }
    }
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

bubbleSort(strArr, (a, b) => {
    return b.localeCompare(a)
})

console.log(strArr);

