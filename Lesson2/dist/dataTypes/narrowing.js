// Union type
// typeof
function printInfo(info) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice(1);
    }
    return info;
}
// instance
const date = new Date();
function checkDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
}
// console.log(printInfo("hải"));
// Optional
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
const numArr2 = [5, 3, 9, 2, 4, 1];
const strArr = ["hải", "bhịnh", "ahắng", "phi"];
numArr2.sort((a, b) => {
    return b - a;
});
console.log(numArr2);
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
bubbleSort(strArr);
console.log(strArr);
