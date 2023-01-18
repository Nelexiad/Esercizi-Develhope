function repeatHello(){
     let sayhello =setInterval(() => console.log("hello"),1000)
     setTimeout(()=>clearInterval(sayhello),5000)
}
 repeatHello()