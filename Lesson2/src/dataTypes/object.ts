const sinhvien: {name: string, grade: number, hometown: string, printInfo: () => string} = {
    name: "Đăng Tuấn",
    grade: 5,
    hometown: "Hà Nội",
    printInfo: function() {
        return `Sinh viên ${this.name} quê quán: ${this.hometown}`
    }
}

const sinhvien2: {name: string, grade: number, hometown: string, printInfo: () => string} = {
    name: "Anh Dũng",
    grade: 5,
    hometown: "Bắc Giang",
    printInfo: function() {
        return "";
    }
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}

interface Book {
    authors: Author[],
    book_cover?: string,
    categories: {id: number, name: string, is_leaf: boolean},
    description: string,
    images: Image[]
}

interface Author {
    id: number,
    name: string,
    slug: string
}

// Type Aliases
type Image = {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string,
    medium_url: string,
    small_url: string
}


// Differences type aliases / interface

// interface User {
//     username: string,
//     password: string,
//     email: string
// }

enum LEVEL {STAFF, MANAGER}

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

// Properties
interface User {
    username: string,
    password: string,
    email: string
}
// Method
interface User {
    login: () => void,
    logout: () => void
}

type Admin = User & {
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}