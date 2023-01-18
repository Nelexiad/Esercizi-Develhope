
function printAsyncName(firstname) {
    setTimeout(() => console.log("Hello"), 1000);
    setTimeout(() => console.log(`${firstname}`), 2000);
}

printAsyncName("Gabriele")