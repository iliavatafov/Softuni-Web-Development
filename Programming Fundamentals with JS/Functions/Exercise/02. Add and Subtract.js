function addAndSubstract(a, b, c) {

    let sub = subtract(a, b, c);
    console.log(sub);

    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b, c) {
        return sum(a, b) - c;
    }
}
