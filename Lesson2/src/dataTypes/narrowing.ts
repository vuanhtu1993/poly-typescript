
// Union type
// typeof
function print1(a: number | string) {
    if (typeof a === "string") {
        return a.toUpperCase()
    }
    return a
}

// optional
function optionalFunc(sinhvien?: {name?: string, age?: number}) {
    if (!!sinhvien) {
        return sinhvien.name
    }
}

optionalFunc({})

// in

interface User {
    username: string,
    password: string,
    email: string
}

type Admin = User & {
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}

function login(user: User | Admin): void {
    if ("is_admin" in user && user.is_admin) {
        console.log("Welcome to admin");
    } else {
        console.log("Welcome back");
    }
}