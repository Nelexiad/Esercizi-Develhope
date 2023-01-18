const number = 1;

let printNumber=(numb)=> {
    return new Promise((resolve, reject) => {
        if (numb >= 10) {
            resolve(console.log(numb))
        } else {
            reject(new Error("lesser then 10"))
        }
    }
    )
}

  printNumber(number)
