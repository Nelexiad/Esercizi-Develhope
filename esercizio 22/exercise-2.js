const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

({ id, firstName, lastName, age } = person);
console.log(id, firstName, lastName, age);