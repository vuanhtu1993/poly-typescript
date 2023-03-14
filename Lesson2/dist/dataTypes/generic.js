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
// const numArr = [1,2,3,5,8,13] // Fibonacci
var strArr = ["Hoa", "Duy", "Vu Anh"];
// const result = numArr.map(item => {
//     return item * item
// })
// console.log(result);
function we17305_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
var result = we17305_map(strArr, function (item, index) {
    return item + "-we17305";
});
console.log(result, "we17305_map");
