// Cai dat babel
// Bước 1: npm install -g @babel/core @babel/cli
// Bước 2: npm install @babel/preset-react
// Bước 3: npx babel <ten file> -w -o <ten file>

const products = [{
  id: 1,
  name: "San pham 1",
  price: 100
}, {
  id: 2,
  name: "San pham 2",
  price: 100
}, {
  id: 3,
  name: "San pham 3",
  price: 100
}, {
  id: 4,
  name: "San pham 4",
  price: 100
}];

// React hoat dong ntn
// Buoc 1: Khai bao DOM
const root = document.querySelector("#root");
// Buoc2: React DOM
const reactRoot = ReactDOM.createRoot(root);
// Buoc 3: Render
// JSX
const list = products.map(item => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, item.name), /*#__PURE__*/React.createElement("p", null, item.price), /*#__PURE__*/React.createElement("button", {
  onClick: () => console.log(item.id)
}, "Xoa")));
reactRoot.render(list);
