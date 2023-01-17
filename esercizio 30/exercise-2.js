class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static toJson() {
    return JSON.stringify(this);
  }
 
   static fromJson(json) {
     const newP = JSON.parse(json);
     console.log(newP)
    return new Person(...Object.values(newP));
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer =  Person.fromJson(json);
console.log(developer);