// check null
type User = {
    name: string,
    email: string,
    role: number
}

type Admin = User & {
    is_admin: true,
    access: ACCESS.STAFF | ACCESS.MANAGER
}

const showInformation = function(user?: User): string {
    if(user) {
        return user.name
    } 
    return "Not found user"
}

showInformation()
// typeof
function toNumber(a: number | string):number {
    if (typeof a === "string") {
        return parseInt(a)
    }
    return a
}

// in
enum ACCESS { STAFF, MANAGER }



function login(user: User | Admin) {``
    // if (user.is_admin)
    if ("is_admin" in user) {
        console.log("welcome to admin page");
    }
    console.log("Welcome back to store");
    
}