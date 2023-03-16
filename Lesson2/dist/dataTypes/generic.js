function showStringData(a) {
    return a;
}
function showNumberData(b) {
    return b;
}
// Generic
function showData(a) {
    return a;
}
showData(10);
var numArr = [13, 2, 1, 8, 5, 3]; // Fibonacci
var strArr = ["Hoa", "Duy", "Vu Anh"];
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
var selectionSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
};
selectionSort(strArr);
console.log(strArr);
