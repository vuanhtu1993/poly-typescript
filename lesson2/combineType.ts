// 1. Primitive types - Nguyên thuỷ
// 2. Object
// 3. Others
// 4. Combining types - Kết hợp
// Union type
const name: string = "tuva"
const result1: string | number = 10
const result2: string | number | boolean | { status: string, data: {} } = true
const restult3: any = {}

// Intersection types
const result4: string & number = 10
const result5: { name: string, age: number } & { role: number } = {
    name: "VinhNS",
    age: 21,
    role: 1
}

type MyString = string
type Car = {
    brand: string,
    name: string,
    year: number,
    engine: string,

}

type CarMove = {
    move?: () => { coordinatorX: number, coordinatorY: number }
}

interface ICar {
    brand: string,
    name: string,
    year: number,
    engine: string
}

interface ICar {
    move?: () => { coordinatorX: number, coordinatorY: number }
}

const car1: Car & CarMove = {
    brand: "Ford",
    name: "Everest",
    year: 2024,
    engine: "v8",
}

const car2: ICar = {
    brand: "Ford",
    name: "Everest",
    year: 2024,
    engine: "v8",
    move: function () {
        return {}
    }
}