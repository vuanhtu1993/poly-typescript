// Generics
const numArray = [1,2,3,5,8,13] //Fibonacci
const numArray2 = ["Thu", "Hoàng", "Đức Anh"]
// const result2 = numArray.map(item => item * item)
// function we17317_map(arr: number[], callback: (item: number) => number): number[] {
//     const temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp;
// }

// Generic
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}

// showData<boolean>("string")

function we17317_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i)
        temp.push(newItem)
    }
    return temp
}

const result2 = we17317_map(numArray2, (item, index) => {
    return item + "-we17317" + " " + index
})

console.log(result2);
