function solve(input) {

    let pattern = /\d/g;

    let matches = input[0].match(pattern);

    let treshold = matches.reduce((a, b) => Number(a) * Number(b));

    pattern = /(?<surroundedBy>:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    matches = pattern.exec(input[0]);

    let emojiList = {};

    while (matches) {
        let emoji = matches.groups.emoji.split(``);
        let score = 0;
        emoji.forEach(x => score += x.charCodeAt());
        emoji.push(matches.groups.surroundedBy);
        emoji.unshift(matches.groups.surroundedBy);
        emojiList[emoji.join(``)] = score;

        matches = pattern.exec(input[0]);
    }

    console.log(`Cool threshold: ${treshold}`);
    console.log(`${Object.keys(emojiList).length} emojis found in the text. The cool ones are:`);

    Object.entries(emojiList).forEach(x => {
        if (x[1] >= treshold) {
            console.log(x[0]);
        }
    });

}