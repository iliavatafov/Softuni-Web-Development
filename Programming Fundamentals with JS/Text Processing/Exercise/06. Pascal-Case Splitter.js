function solve(text) {
    let result = [];
    let currentWord = ``;
    text = text.split(``);

    while (text.length > 0) {
        let char = text.shift();
        if (char === char.toUpperCase()) {
            result.push(currentWord);
            currentWord = char;
        } else {
            currentWord += char;
        }
    }
    result.push(currentWord);

    let deleteFirstElement = result.shift()
    console.log(result.join(`, `))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')