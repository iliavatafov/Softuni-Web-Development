function solve(string) {
    let listOfWords = string.split(` `);
    let words = {};

    for (let word of listOfWords) {
        word = word.toLowerCase();
        if(!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }

    let result = [];

    for (let [key, value] of Object.entries(words)) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(` `))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')