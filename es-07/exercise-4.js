function nicknameMap(persons) {
  const nickArray = [];
  for (let i = 0; i < persons.length; i++) {
    nickArray.push(persons[i].name + '-' + persons[i].age);
  }
  return nickArray;
}
function nicknameMap2(persons) {
  return persons.map(person => person.name + '-' + person.age);
}


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
const nicknames2 = nicknameMap2(persons);

console.log(persons);
console.log(nicknames);
console.log(nicknames2);

