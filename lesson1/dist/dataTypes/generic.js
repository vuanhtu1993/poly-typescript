// Generics
const numArray = [1, 2, 3, 5, 8, 13]; //Fibonacci
const numArray2 = ["Thu", "Hoàng", "Đức Anh"];
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
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
const result2 = we17317_map(numArray2, (item, index) => {
    return item + "-we17317" + " " + index;
});
// console.log(result2);
const BookPage = async function () {
    const books = await (await fetch('http://localhost:3000/books')).json();
    console.log(books[0]);
    return /**/ `
        ${books.map(book => /*html*/ `
            <div>
                <h2>${book.name}</h2>
                <img src="${book.images[0].base_url}" />
            </div>
        `)}
    `;
};
const app = document.querySelector("#app");
app.innerHTML = await BookPage();
