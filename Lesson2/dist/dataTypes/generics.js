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
const numArr = [1, 2, 3, 4, 5, 6, 7, 8];
const stringArr = ["A", "B", "C"];
// const result = numArr.map(item => {
//     return item * item
// })
const we17307_map = (arr, callback) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
const result = we17307_map(stringArr, (item, index) => {
    return item + "-we17307" + " " + index;
});
console.log(result);
