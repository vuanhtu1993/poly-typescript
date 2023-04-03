export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: IBrand,
    specifications: ISpecification[]
}

export interface IBrand {
    id: string,
    name: string,
    slug: string
}

export interface ISpecification {
    name: string,
    attributes: {code: string, name: string, value: string}[]
}