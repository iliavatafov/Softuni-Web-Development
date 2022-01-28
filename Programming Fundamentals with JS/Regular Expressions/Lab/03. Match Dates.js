function solve(input) {
    let pattern = /\b(?<day>\d{2})([\./-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let correctDate = pattern.exec(input);

    while (correctDate !== null) {
        console.log(`Day: ${correctDate.groups.day}, Month: ${correctDate.groups.month}, Year: ${correctDate.groups.year}`);
        correctDate = pattern.exec(input);
        
    }
}