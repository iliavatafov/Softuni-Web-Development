function sum(numbers, startIndex, endIndex) {

    if (!Array.isArray(numbers)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex > numbers.length - 1) {
        endIndex = numbers.length - 1;

    }

    let sumNumbers = numbers.map(Number)
        .slice(startIndex, endIndex + 1)
        .reduce((a, b) => a + b, 0);

    return sumNumbers;
}

let numbers = [10, 20, 30, 40, 50, 60];
let startIndex = 3;
let endIndex = 300;

let result = sum(numbers, startIndex, endIndex);

console.log(result);