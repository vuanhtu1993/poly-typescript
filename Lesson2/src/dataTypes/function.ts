// 1. Function declaration (Khai bao ham)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function() {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}
// 2. Function return
let num1: number;
// function sum(): number {
//     return;
// }

// function showName(): string {
//     return;
// }

function logger(): void {
    console.log("Thêm mới thành công");
}

function showError(): never {
    const error = new Error("Something went wrong!")
    throw error;
}

// const err = showError()

// 3. Function parameter
function sum(a: number, b: number = 0): number {
    return a + b
}

console.log(sum(10, -1));


function showName(): string {
    return;
}

// 4. Rest parameter

// 5. Callback