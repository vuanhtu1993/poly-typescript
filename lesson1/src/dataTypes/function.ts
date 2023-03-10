// 1. Function return
function demoFunc(): void {
    // console.log("");
    return;
}

// never
function neverFunc(): never {
    const error = new Error("Có lỗi xảy ra")
    throw error
}

const result = demoFunc()
// console.log(result);


// 2. Function parammeter
const showInfo = (firstName: string, lastName:string, midName?: string): string => {
    return "Tên sinh vien: " + firstName + " " + midName + " " +lastName
}

// console.log(sum(10, 20));


// Hoisting
function sum(a: number, b?: number): number {
    return a + b
}

// 3. Optional ?

// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));

// 4. Function declaration
const func2 = function() {

}

const func3 = () => {

}

// 5. Callback
function we17317_map(arr: any[], callback: () => void) {

}

let numberArray = [1,2,3]
const newArr = numberArray.map((item) => {
    return item * 2
})

console.log(newArr);

