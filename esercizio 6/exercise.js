function printName () {
     const helloName = `Hello John`;
     function inner () {
         return helloName;
    }
    return inner;
}
console.log(printName()())
