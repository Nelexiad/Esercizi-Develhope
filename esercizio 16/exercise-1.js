class Person {
    constructor(firtsName, lastName) {
        this.firstName = firtsName;
        this.lastName =lastName
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
console.log(developer)

