// 1. Function declaration

function func1() {
    console.log("Func1");
}

const func2 = function() {
    console.log("Func2");
}

const func3 = () => {
    console.log("Func3");
}

// 2. Function return 
function func4(): string {
    return;
}

function sum(a: number): number {
    return a
}

function func5(): void {
    console.log("Hello world");
}

function func6(): never {
    while(true) {

    }
}

function func7(): never {
    const error = new Error("Something went wrong!")
    throw error;
}

// 3. Function parameter
function divide(a: number, b?: number): number {
    if (b) {
        return a - b
    } else {
        return a
    }
}

function divide2(a: number, b: number = 0): number {
    return a - b
}

divide(10)

// 4. Rest parameter
const showClasses = (name: string, ...classes: string[]): string => {
    return `Sinh viên ${name} học lớp ${classes.join(", ")}`
}

console.log(showClasses("Anh Ngọc", "Typescript", "Nodejs"));
console.log(showClasses("Hào", "Typescript"));
