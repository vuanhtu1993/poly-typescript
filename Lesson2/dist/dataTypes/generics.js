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
showData(10);
var numArr = [1, 2, 3, 4, 5, 6, 7, 8];
var stringArr = ["Trinh", "Ly", "Bich"];
// const result = numArr.map(item => {
//     return item * item
// })
var we17307_map = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
var result = we17307_map(stringArr, function (item, index) {
    return item + "-we17307" + " " + index;
});
console.log(result);
