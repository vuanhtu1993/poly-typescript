// Nếu kiểu dữ liệu chưa được xác định rõ ràng chúng ta có thể ép kiểu như sau
// Có 2 cách ép kiểu như sau:
// 1. 
const num: any = 10
const str = (<string>num).split("")
const str2 = (num as string).split("")
console.log(str2);
