function solve(text, word) {
    let counter = 0;
    text.split(` `).forEach( element => {
        if (element === word) {
            counter++;
        }
    });
    console.log(counter)
}

solve("This is a isrd and it also is a sentence",
"is"
)