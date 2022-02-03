function solve(n1, n2, operator) {

    let operators = {
        sum: function (a, b) { return a + b },
        subtraction: function (a, b) { return a - b },
        multiplication: function (a, b) { return a * b },
        division: function (a, b) { return a / b },
        modularDivision: function (a, b) { return a % b },
        power: function (a, b) { return a ** b },
    }
    let result = 0;

    switch (operator) {
        case `+`:
            result = operators.sum(n1, n2);
            break;
        case `-`:
            result = operators.subtraction(n1, n2);
            break;
        case `*`:
            result = operators.multiplication(n1, n2);
            break;
        case `/`:
            result = operators.division(n1, n2);
            break;
        case `%`:
            result = operators.modularDivision(n1, n2);
            break;
        case `**`:
            result = operators.power(n1, n2);
            break;
    }
    
    console.log(result);
}