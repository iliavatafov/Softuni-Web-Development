function sumOfNumbers(input) {

    let number = input[0];

    let result = 0;

    for (let i = 0; i < number.length; i++) {
        let num1 = Number(number[i]);
        result += num1;
    }
    console.log(`The sum of the digits is:${result}`);
}