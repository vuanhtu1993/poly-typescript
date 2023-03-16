
function showStringData(a: string): string {
    return a
}

function showNumberData(b: number): number {
    return b
}
// Generic
function showData<T>(a: T): T {
    return a
}

showData<number>(10)

const numArr = [13,2,1,8,5,3] // Fibonacci
const strArr = ["Hoa", "Duy", "Vu Anh"]
// const result = numArr.map(item => {
//     return item * item
// })

// console.log(result);


// function we17305_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = <T[]>[]
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17305_map(strArr, (item, index) => {
//     return item + "-we17305"
// })

// console.log(result, "we17305_map");

// numArr.sort((a, b) => {
//     return b - a
// })
// console.log(numArr);


const selectionSort = (arr: string[]) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

selectionSort(strArr)
console.log(strArr);
