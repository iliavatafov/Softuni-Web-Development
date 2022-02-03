function solve(input) {

    let lineOne = 0;
    let lineTwo = 0;
    let result = [];

    for (let j = 0; j < input.length; j++) {
        lineOne += input[j][j];
    }
    for (let i = input.length - 1; i >= 0; i--) {
        lineTwo += input[input.length - 1 - i][i];
    }
    result.push(lineOne, lineTwo);
    console.log(result.join(` `));
}