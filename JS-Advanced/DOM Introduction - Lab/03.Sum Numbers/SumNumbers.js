function calc() {
    let firstNum = document.querySelector(`#num1`);
    let secondNum = document.querySelector(`#num2`);
    let sum = document.querySelector(`#sum`);
    firstNum = Number(firstNum.value);
    secondNum = Number(secondNum.value);
    sum.value = firstNum + secondNum;
}