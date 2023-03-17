const root = ReactDOM.createRoot(document.querySelector("#app"));
const products = [{
  id: 1,
  name: "San pham 1",
  price: 100
}, {
  id: 2,
  name: "San pham 2",
  price: 500
}, {
  id: 3,
  name: "San pham 3",
  price: 400
}, {
  id: 4,
  name: "San pham 4",
  price: 200
}];
const element = products.map(item => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, item.name), /*#__PURE__*/React.createElement("p", null, item.price), /*#__PURE__*/React.createElement("a", {
  href: `http://localhost:8000/update/${item.id}`
}, "Link"), /*#__PURE__*/React.createElement("button", {
  onClick: () => console.log(item.id)
}, "Delete"))); // JSX
// render
root.render(element);
