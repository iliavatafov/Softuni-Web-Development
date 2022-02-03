function solve(num) {
    let array = num.toString().split(``);
    let firstNum = Number(array[0]);
    let total = 0;
    let isAllDigitsSame = true;
    for (let el of array) {
        let currentNum = Number(el);
        total += currentNum;
        if (currentNum !== firstNum) {
            isAllDigitsSame = false;
        }
    }
    console.log(isAllDigitsSame);
    console.log(total);
}