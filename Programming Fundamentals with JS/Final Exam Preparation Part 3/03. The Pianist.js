function solve(input) {

    let numberOfLines = Number(input.shift());

    let listOfSongs = {};

    let lineOfInput = input.shift();

    for (let i = 0; i < numberOfLines; i++) {
        let [piece, composer, key] = lineOfInput.split(`|`);
        listOfSongs[piece] = [composer, key];
        lineOfInput = input.shift();
    }

    while (lineOfInput !== `Stop`) {
        let [command, piece, composer, key] = lineOfInput.split(`|`);

        if (command === `Add`) {
            listOfSongs = add(listOfSongs, piece, composer, key);
        } else if (command === `Remove`) {
            listOfSongs = remove(listOfSongs, piece);
        } else if (command === `ChangeKey`) {
            listOfSongs = changeKey(listOfSongs, piece, composer);
        }
        lineOfInput = input.shift();
    }

    Object.entries(listOfSongs)
    .sort((a, b) => a[1][0]
    .localeCompare(b[1][0]))
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(x => console.log(`${x[0]} -> Composer: ${x[1][0]}, Key: ${x[1][1]}`));

    function add(listOfSongs, piece, composer, key) {
        if (!listOfSongs.hasOwnProperty(piece)) {
            listOfSongs[piece] = [composer, key];
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
        return listOfSongs;
    }

    function remove(listOfSongs, piece) {
        if (listOfSongs.hasOwnProperty(piece)) {
            delete listOfSongs[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        return listOfSongs;
    }

    function changeKey(listOfSongs, piece, newKey) {
        if (listOfSongs.hasOwnProperty(piece)) {
            listOfSongs[piece][1] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } 
        return listOfSongs;
    }
}