class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
let anotheDev = JSON.stringify(new Person(2,"Matteo", "Blu", 33))


tojson = (a) => {
  let b = JSON.stringify(a)
  return b
  
};
let devjson = JSON.stringify(developer)
let devjson2 = tojson(developer)
console.log(developer)
console.log(devjson2)
console.log(JSON.stringify(developer))
console.log(devjson)
console.log(anotheDev)

// Print developer as json object