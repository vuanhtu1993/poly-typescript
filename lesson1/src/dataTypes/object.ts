// Object declaration
// Object literal
const sinhvien: {name: string, age: number, homeTown?: string} = {
    name: "Nam Cuong",
    age: 20,
    // homeTown: "Van Con"
}

const sinhvien2: {name: string, age: number, homeTown?: string} = {
    name: "Thành",
    age: 20,
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}} = {
    
// }

// const book2: 

interface Book {
    authors: Author[]
}

interface Author {
    id: number,
    name: string,
    slug: string
}