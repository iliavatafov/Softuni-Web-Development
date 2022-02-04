function solve(input) {

    let sumFirstRow = input[0].reduce((a, b) => a + b);

    let isAllNumsEqual = true;

    for (let row = 0; row < input.length; row++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        if (input.length > input[row].length) {

        }
        for (let col = 0; col < input[row].length; col++) {
            currentRowSum += input[row][col];
            if (input.length === input[row].length) {
                currentColSum += input[col][row];
            }
        }
        if (sumFirstRow !== currentRowSum || sumFirstRow !== currentColSum) {
            isAllNumsEqual = false;
            break;
        }
    }
    console.log(isAllNumsEqual);
}
