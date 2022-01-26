function outer() {
    let a = 10;

    function inner() {
        let b = 5;
        console.log(a + b);
    }
    return inner
}
let returnFunction = outer()
returnFunction()