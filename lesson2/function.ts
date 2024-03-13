// Function: () => void
// Parameter: Default parameter, rest parameter
// Return: 
const sum: (...numbers: number[]) => number = (...number) => {
    // type guards
    // console.log(number);
    return number.reduce((acc, value) => acc + value, 0)
    // return 0
}

console.log(sum(10, 20, 30, 50, 100));
