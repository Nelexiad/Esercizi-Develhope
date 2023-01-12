
function printName() {
     const helloName = `Hello John`;
    
    inner = () => {
        setTimeout(() => {
            console.log( helloName);
        }, 1000)
    }
        return inner;
}
printName()()
