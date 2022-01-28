function solve(listOfNumbers) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let correctNumbers = pattern.exec(listOfNumbers);
    let result = [];

    while (correctNumbers !== null) {
        result.push(correctNumbers[0]);
        correctNumbers = pattern.exec(listOfNumbers);
    }

    console.log(result.join(`, `));
    
}