function solve(words) {
    let listOfWards = new Map();
    words.forEach(x => listOfWards.set(x, words.filter(a => a === x).length));
    let sorted = Array.from(listOfWards.entries())
    .sort((a,b) => b[1] - a[1])
    .forEach(x => console.log(`${x[0]} -> ${x[1]} times`));    
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])