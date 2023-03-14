function sortArray<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    const n = arr.length;
    const cmp = compareFn || ((a: T, b: T) => a < b ? -1 : (a > b ? 1 : 0));
    for (let i = 1; i < n; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && cmp(arr[j], current) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const arr = [2, 10, 3, 8, 1, 9]
const strArr = ["b", "c", "a", "e"]
// function selectionSort(arr: number[]) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// selectionSort(arr)
// console.log(arr);
function newSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[] {
    if (!compare) {
        compare = function (a: T, b: T) {
            if(a > b) {
                return 1
            } else if (a < b) {
                return 0
            }
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[i], arr[j]) > 0) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

newSort(arr, (a, b) => {
    return a - b
})

console.log(arr);
