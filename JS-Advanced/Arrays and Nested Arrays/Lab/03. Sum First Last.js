function solve(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.pop()) || 0;
    let result = firstNum + secondNum;
    return result;
}

solve(['20', '30', '40'])