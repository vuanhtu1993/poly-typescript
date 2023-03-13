// Optional ?
// Narrowing
const showName = (firstName: string, lastName: string, midName?: string) => {
    if (midName) {
        return firstName + " " + midName + " " + lastName
    }
    return firstName + " " + lastName
}

// Union type
// Narrowing typeof
const unionFunc = (a: number | string): number => {
    if (typeof a === "string") {
        return parseInt(a)
    }
    return a
}

console.log(unionFunc("10.11111"));

// in

type User = {
    username: string,
    password: string,
    email: string,
}

type Admin = User & {
    role: ROLE.MANAGER | ROLE.STAFF
}

function login(user: User | Admin) {
    if("role" in user) {
        console.log("Welcome to admin");
    }
    console.log("Welcome back");
    
}

// login(user)