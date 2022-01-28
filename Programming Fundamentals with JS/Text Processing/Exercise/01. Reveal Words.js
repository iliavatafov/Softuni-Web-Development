function solve(words, text) {

    words = words.split(`, `);
    text = text.split(` `);
    
    
    for (let wordFromText of text) {
        if (wordFromText.includes(`*`)) {
            for (let word of words) {
                if (wordFromText.length === word.length) {
                    let index = text.indexOf(wordFromText);
                    text.splice(index, 1, word)
                }
            }
        }
    }

    console.log(text.join(` `));

}
