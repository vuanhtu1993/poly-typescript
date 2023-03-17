// Generics
const numArray = [1, 2, 3, 5, 8, 13]; //Fibonacci
const numArray2 = ["Thu", "Hoàng", "Đức Anh"];
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
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
// showData<boolean>("string")
// function we17317_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }
// const result2 = we17317_map(numArray2, (item, index) => {
//     return item + "-we17317" + " " + index
// })
const numArray3 = [13, 5, 8, 2, 3, 1];
const strArr = ["b", "c", "d", "a"];
numArray3.sort((a, b) => {
    // return a - b
    return a - b;
});
// console.log(numArray3);
function selectionSort(arr, callback) {
    if (!callback) {
        callback = (a, b) => {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
selectionSort(strArr, (a, b) => {
    return a.localeCompare(b);
});
console.log(strArr);
