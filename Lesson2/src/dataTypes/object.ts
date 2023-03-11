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
    categories: {id: number, name: string, is_leaf: boolean}
}

interface Author {
    id: number,
    name: string,
    slug: string
}
