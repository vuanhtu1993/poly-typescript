// Interface
// interface User {
//     id: number,
//     username: string,
//     password: string,
//     email: string,
// }

enum LEVEL {MANAGER, STAFF}

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

// Properties
interface User {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}
// Method
interface User {
    login: () => void,
    logout: () => void
}

interface Admin extends User {
    id: string,
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}