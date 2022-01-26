function solve(arr) {

    let wordsTracker = {};

    let words = arr.shift().split(` `);

    for (let word of words) {
        if (!wordsTracker.hasOwnProperty(word)) {
            wordsTracker[word] = 0;
        } else {
            wordsTracker[word]++;
        }
    }

    for (let element of arr) {
        if (wordsTracker.hasOwnProperty(element)) {
            wordsTracker[element]++;
        }
    }

    let sorted = Object.entries(wordsTracker).sort((a, b) => b[1] - a[1]);

    sorted.forEach(x => console.log(`${x[0]} - ${x[1]}`))

}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)