// 1. Union type
// typeof
function print1(a: string | number) {
    if(typeof a === "string") {
        return a.toUpperCase()
    } 
    return a
}

// 2. Optional
function optionalFunc(sinhvien?: {name: string, age: number}) {
    if (sinhvien) {
        return sinhvien.name
    }
}

optionalFunc()
// 3. in

interface User {
    username: string,
    password: string,
    email: string,
}

enum ROLE {STAFF, MANAGER}

interface Admin extends User {
    is_admin: boolean,
    role: ROLE.STAFF | ROLE.MANAGER
}

function login(user: User | Admin) {
    if ("is_admin" in user) {
        console.log("Welcome to admin");
    } else {
        console.log("Welcome back");
        
    } 
}