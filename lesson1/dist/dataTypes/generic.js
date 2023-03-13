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
function we17304_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var result = we17304_map(arrStr, function (item) {
    return item + " - we17304";
});
console.log(result);
