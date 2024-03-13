// Combining types
// 1. Union type
const result: string | null = "success"
const result2: string | number | boolean | { status: string, code: number } = true

// 2. Type alias
type Result = string | number | boolean | { status: string, code: number }
const result3: Result = 200

// 3. Intersection type
type NumberString = Result & { data: {} }
const result4: NumberString = {
    status: "OK",
    code: 201,
    data: {}
}

// Type
type Car = {
    brand: string,
    name: string,
    year: number,
    engine: string,
    move(): { coordinatorX: number, coordinatorY: number }
}

interface ICar {
    brand: string,
    name: string,
    year: number,
    engine: string,
}

interface ICar {
    move(): { coordinatorX: number, coordinatorY: number }
}