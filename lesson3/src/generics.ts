// Generics: Là một cách viết code, cho phép hàm, class, interface làm việc với nhiều kiểu dữ liệu động
// Có phép ràng buộc kiểu dữ liệu với nhau

// function identity<T>(name: T): T {
//     return name
// }

// identity("tuva")
// identity(30)
// identity({})

const wd18333Map = function <T>(array: T[], callback?: (item: T) => T): T[] {
    let newArray: T[] = []
    for (let item of array) {
        // console.log(item);
        // type guard
        if (callback) {
            const newItem = callback(item)
            // console.log(newItem);
            newArray.push(newItem)
        }
    }

    return newArray
}

console.log(wd18333Map(["A", "B", "C", "D"], item => item + "alphabet"));


// ["A", "B", "C", "D"].map(item => item + "alphabet")

console.log(["Tiến", "Vừa đẹp trai vừa thông minh Mạnh Tiến", "Dương", "Tùng"].sort());
console.log([4, 12, 50, 30].sort((a, b) => a - b));

const wd18333Sort = function () {

}
