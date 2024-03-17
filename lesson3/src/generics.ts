// Generics: Là một cách viết code cho phép hàm, classes, interfaces
// làm việc với nhiều kiểu dữ liệu thay vì một kiểu
// Các kiểu dữ liệu này ràng buộc với nhau

// type LoggingType = string | number | undefined

// function logging(age: string | number): LoggingType {
//     if (typeof age == "string") {
//         return age
//     } else if (typeof age == "number") {
//         return new Date().getFullYear() - age
//     }
// }

// function logging<T>(age: T): T {
//     if (typeof age == "string") {
//         return age
//     } else if (typeof age == "number") {
//         return new Date().getFullYear() - age
//     }
//     return age
// }

// logging("20 tuoi");

const wd18326Map = <T>(array: T[], callback: (item: T) => T) => {
    let newArray: T[] = []
    for (let item of array) {
        // console.log(item);
        const newItem = callback(item)
        newArray.push(newItem)
    }
    return newArray;
}
console.log(wd18326Map(["A", "B", "C", "D"], (item) => item + "-alphabet"));

// ["A", "B", "C", "D"].map(item => item + "-alphabet")

