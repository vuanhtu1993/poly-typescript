// Object
const obj: {name: string, age?: number, hometown: string} = {
    name: "Bình",
    age: 20,
    hometown: "Hà Nội"
}

// Interface
interface Book {
    authors: {id: number, name: string, slug:string}[],
    book_cover: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller
}

interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}

let book: Book;

let book2: Book;

let seller: Seller;