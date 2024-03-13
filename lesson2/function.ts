// Function
// Arguments: default paremeter, the rest parameter
// Return:
// const sum: (a: number, b: number) => number = (a, b) => {
//     return a + b
// }

// const sum = (a: number, b: number): number => {
//     return a + b
// }

const sum = (...args: number[]): number => {
    return args.reduce((acc, value) => acc + value)
}

console.log(sum(10, 20, 30, 100, 200));
