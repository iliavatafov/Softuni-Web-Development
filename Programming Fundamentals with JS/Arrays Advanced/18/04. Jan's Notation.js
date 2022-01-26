function janNotation(arr) {
    let newArr = [];
    let result = 0;
    for (let value of arr) {
        if (Number.isInteger(value)) {
            newArr.push(value)
        } else {
            result = operation(newArr[newArr.length - 1], newArr[newArr.length - 2], value)
            newArr.splice(newArr.length - 2, 2, result)
        }
    }

    if (isNaN(result)) {
        console.log(`Error: not enough operands!`)
    } else if (newArr.length >= 2) {
        console.log(`Error: too many operands!`)
    } else {
        console.log(result);
    }

    function operation(a, b, operator) {
        let result = 0;
        switch (operator) {
            case `-`:
                result = b - a;
                break;
            case `+`:
                result = b + a;
                break;
            case `*`:
                result = b * a;
                break;
            case `/`:
                result = b / a;
                break;
        }
        return result;
    }
}
