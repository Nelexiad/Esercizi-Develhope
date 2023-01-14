class Person {
  _firstName;
  _lastName;
  _age;
  
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    

  }
  set firstName(name) {
    this._firstName = name;
  }
  set lastName(name) {
    this._lastName = name;
  }
  set age(ageValue) {
    if (ageValue < 18) {
      this._age = "too young";
    } else {
      this._age = ageValue;
    }
    
  }
  get age() {
    return this._age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName
  }
   get fullName() {
    return this._firstName + " " + this._lastName;
   }
  
}

let person = new Person('Mario', 'Rossi', 25);
console.log(person)
console.log(person.firstName);
console.log(person.fullName);


person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person)
console.log(person.fullName);