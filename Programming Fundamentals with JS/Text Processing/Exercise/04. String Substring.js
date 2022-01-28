function solve(word, text) {
    text = text.toLowerCase().split(` `);

    for (let element of text) {
        if (element === word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}