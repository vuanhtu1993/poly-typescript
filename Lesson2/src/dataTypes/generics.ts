// Generics
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}
showData<number>(10)

const numArr = [1,2,3,4,5,6,7,8]
const stringArr = ["Trinh", "Ly", "Bich"]
// const result = numArr.map(item => {
//     return item * item
// })

const we17307_map = <T>(arr: T[], callback: (item: T, index: number) => T): T[] => {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i)
        temp.push(newItem)
    }
    return temp
}

const result = we17307_map(stringArr, (item, index) => {
    return item + "-we17307" + " " + index
})

console.log(result);
