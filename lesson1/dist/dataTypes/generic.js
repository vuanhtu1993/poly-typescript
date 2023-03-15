// Generics
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData("string");
var arrNum = [1, 2, 3, 5, 8, 13]; //Fibonacci
var arrStr = ["Quang", "Quy", "Hau", "Duc"]; //Fibonacci
// function we17304_map(arr: number[], callback: (item: number) => number): number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })
// console.log(result);
var arrNum2 = [13, 1, 3, 5, 8, 2]; //Fibonacci
var arrStr2 = ["b", "cb", "ab", "e"];
arrNum2.sort(function (a, b) {
    return b - a;
});
// console.log(arrNum2);
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
selectionSort(arrStr2);
console.log(arrStr2);
