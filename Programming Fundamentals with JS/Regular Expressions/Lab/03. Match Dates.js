function solve(input) {
    let pattern = /\b(?<day>\d{2})([\./-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let correctDate = pattern.exec(input);

    while (correctDate !== null) {
        console.log(`Day: ${correctDate.groups.day}, Month: ${correctDate.groups.month}, Year: ${correctDate.groups.year}`);
        correctDate = pattern.exec(input)
    }
}

solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")