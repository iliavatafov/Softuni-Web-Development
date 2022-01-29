function solve([input]) {
    let regexp = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let validPairs = [];
    let validPair = null;
    while (validPair = regexp.exec(input)) {
        validPairs.push(validPair.groups);
    }
    console.log(validPairs.length ? `${validPairs.length} word pairs found!` : 'No word pairs found!');
    let mirrorWords = validPairs.filter(pair => isMirrorPair(pair));
    if (mirrorWords.length) {
        console.log('The mirror words are:');
        console.log(mirrorWords.map(pair => `${pair.word1} <=> ${pair.word2}`).join(', '))
    } else {
        console.log('No mirror words!');
    }

    function isMirrorPair(pair) {
        return pair.word1 === pair.word2.split('').reverse().join('');
    }
}

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])