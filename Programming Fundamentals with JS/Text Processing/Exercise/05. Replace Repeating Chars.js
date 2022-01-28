function solve(text) {
    text = text.split(``);
    let result = [];

    while (text.length > 0) {
        let currentChar = text.shift();
        let check = text[0];
        if (currentChar !== check) {
            result.push(currentChar);
        }
    }

    console.log(result.join(``));
}