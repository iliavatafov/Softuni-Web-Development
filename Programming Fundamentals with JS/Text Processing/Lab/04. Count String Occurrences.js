function solve(text, word) {
    let counter = 0;
    text.split(` `).forEach(element => {
        if (element === word) {
            counter++;
        }
    });
    console.log(counter);
}