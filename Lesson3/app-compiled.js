const root = ReactDOM.createRoot(document.getElementById('app'));
const products = [{
  name: "San pham 1",
  price: 100
}, {
  name: "San pham 2",
  price: 200
}, {
  name: "San pham 3",
  price: 300
}, {
  name: "San pham 4",
  price: 400
}];
const element = /*#__PURE__*/React.createElement(React.Fragment, null, products.map((item, index) => /*#__PURE__*/React.createElement("div", {
  key: index
}, /*#__PURE__*/React.createElement("h2", null, item.name), /*#__PURE__*/React.createElement("p", null, item.price), /*#__PURE__*/React.createElement("button", {
  onClick: () => console.log(item.name)
}, "Magic"))));
root.render(element);
