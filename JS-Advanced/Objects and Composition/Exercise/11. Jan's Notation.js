function solve(input) {

    let operations = {
        calculationMethod(operator) {
            let calcMethod
            if (operator === `+`) {
                calcMethod = this.sum;
            } else if (operator === `-`) {
                calcMethod = this.subtract;
            } else if (operator === `*`) {
                calcMethod = this.multiplay;
            } else {
                calcMethod = this.divide;
            }
            return calcMethod;
        },
        sum(a, b) {
            return a + b;
        },
        subtract(a, b) {
            return a - b;
        },
        multiplay(a, b) {
            return a * b;
        },
        divide(a, b) {
            return a / b;
        }
    }

    let elementOfInput = input.shift();
    let operators = [];
    let operands = [];

    while (elementOfInput) {
        if (isNaN(elementOfInput)) {
            operators.push(elementOfInput);
        } else {
            operands.push(elementOfInput);
        }
        if (operands.length > 1 && operators.length > 0) {
            let b = operands.pop();
            let a = operands.pop();

            let operator = operators.shift();
            let calcMehod = operations.calculationMethod(operator);
            let result = calcMehod(a, b);
            operands.push(result);
        }
        elementOfInput = input.shift();
    }
    if (operands.length === 1 && operators.length === 0) {
        console.log(operands[0]);
        return;
    } else if (operands.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
    } else if (operators.length < 1) {
        console.log(`Error: too many operands!`)
        return;
    }
}

solve([
    -1,
    1,
    `+`,
    101,
    `*`,
    18,
    `+`,
    3,
    `/`
])