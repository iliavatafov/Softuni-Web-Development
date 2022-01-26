function solve(arr) {

    let text = arr.shift().split(``);
    let command = arr.shift();
    let result = 0;
    if (command === `LOWERCASE`) {
        result = LOWERCASE(text, result);
    } else {
        result = UPPERCASE(text, result);
    }

    console.log(`The total sum is: ${result}`);

    function LOWERCASE(text, result) {
        for (let char of text) {
            if (char === char.toLowerCase()) {
                let value = char.charCodeAt();
                if (value > 96 && value < 123) {
                    result += value;
                }
            }
        }
        return result;
    }

    function UPPERCASE(text, result) {
        for (let char of text) {
            if (char === char.toUpperCase()) {
                let value = char.charCodeAt();
                if (value > 64 && value < 91) {
                    result += value;
                }
            }
        }
        return result;
    }
}

solve(
    ["AC/DC",
        "UPPERCASE"]

)