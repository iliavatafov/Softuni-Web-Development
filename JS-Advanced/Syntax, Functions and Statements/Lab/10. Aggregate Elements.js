function solve(input) {

    let sum = input.reduce((a, b) => a + b);
    let sumAndDevide = 0;
    input.forEach(x => sumAndDevide += 1 / x);
    let concatValue = input.join(``);
    console.log(sum);
    console.log(sumAndDevide);
    console.log(concatValue);

}