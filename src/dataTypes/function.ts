// const test  = (name: string | null) => {
//     return name.toLowerCase()
// }

// test(null)
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function infiniteLoop(): never {
    while (true) {
        console.log('Running forever')
    }
}

// infiniteLoop()

let func: (a: string) => void = (a) => {
    console.log(a);
    
}

const a: () => void = function() {

}
