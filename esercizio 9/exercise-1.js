const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
printObj = (person) => {
  for (keys in person) {
    console.log(keys)
  }
}
printObj2 = (person) => {
  for (const value of Object.values(person)) {
    console.log(value)
  }
}
printObj3 = (person) => {
  Object.keys(person).forEach(key => console.log(person[key]))
}
printObj4 = (person) => {
  for (keys in person) {
    console.log(keys + ":" + person[keys])
  }
}

console.log(person.firstName)      
console.log(person.lastName)      
console.log(person.age)
console.log(person)  
printObj(person)
printObj2(person)
printObj3(person)
printObj4(person)
   