function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
// greet("Brendan");
var names = [{
        id: 1,
        name: "a"
    }];
names.map(function (s) {
    return s.name.toLowerCase();
});
var person = {
    name: "a",
    age: 10
};
function showName(person) {
    console.log(person.name);
}
// Union type
var unionFunction = function (a) {
    if (typeof a == "string")
        console.log(a.toLowerCase());
};
