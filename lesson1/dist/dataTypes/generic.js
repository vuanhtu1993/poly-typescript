// Generics
var numArray = [1, 2, 3, 5, 8, 13]; //Fibonacci
var numArray2 = ["Thu", "Hoàng", "Đức Anh"];
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
function we17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
var result2 = we17317_map(numArray2, function (item, index) {
    return item + "-we17317" + " " + index;
});
console.log(result2);
