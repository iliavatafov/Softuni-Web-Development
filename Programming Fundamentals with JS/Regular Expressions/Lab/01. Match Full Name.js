function solve(input) {
    let pattern = /\b(?<firstName>[A-Z][a-z]+) (?<lastName>[A-Z][a-z]+)\b/g;
    let namesFromPattern = pattern.exec(input);
    let result = [];

    while (namesFromPattern !== null) {
        result.push(namesFromPattern[0]);
        namesFromPattern = pattern.exec(input);
    }

    console.log(result.join(` `));

}