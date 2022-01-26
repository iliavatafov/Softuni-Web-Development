function factorialDivision(num1, num2) {

    let sumFirstNum = 1;
    let sumSecondNum = 1;

    for (let i = num1; i > 1; i--) {
        sumFirstNum *= i;
    }
    for (let j = num2; j > 1; j--) {
        sumSecondNum *= j;
    }
    let result = sumFirstNum / sumSecondNum;
    console.log(result.toFixed(2));
}
