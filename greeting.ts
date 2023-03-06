function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
  // greet("Brendan");

  const names = [{
    id: 1,
    name: "a"
  }]

  names.map(function(s) {
    return s.name.toLowerCase()
  })

  const person: {name: string, age: number} = {
    name: "a",
    age: 10
  }

  function showName(person) {
    console.log(person.name);
  }

  // Union type
  const unionFunction = (a: string | number) => {
    if(typeof a == "string")
    console.log(a.toLowerCase());
    
  }