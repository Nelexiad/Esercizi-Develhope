const isLogged = true;
 function checklog(val) {
    return new Promise((resolve, reject) => {
        if (val === true) {
            resolve(Math.random())
        } else {
            new Error("not logged")
        }
    })
}
function checknumb(numb) {
    return new Promise((resolve, reject) => {
        if (numb > 0.1) {
            resolve({name: "John", age: 24})
        } else {
           reject( new Error("not enough"))
        }
        return resolve
    })
}
checklog(isLogged)
    .then(checknumb)
    .then((val)=> console.log(val))
    .catch(new Error("something wrong"))

async function asyncCheck(isLogged) {
   let rNumb= await checklog(isLogged)
    let person = await checknumb(rNumb);
    console.log(person);
    return person;
    
    
    
}
    asyncCheck(isLogged)
