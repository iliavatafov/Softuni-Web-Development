function solve(input) {

    let numberOfPlants = Number(input.shift());

    let platsList = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plant, rarity] = input.shift().split(`<->`);
        platsList[plant] = {
            rarity: Number(rarity),
            rating: [],
        };
    }

    let lineOfInput = input.shift();

    while (lineOfInput !== `Exhibition`) {

        lineOfInput = lineOfInput.split(`: `);
        let command = lineOfInput.shift();
        let plant = lineOfInput.join(``).split(` - `).shift();

        if (platsList.hasOwnProperty(plant)) {
            if (command === `Rate`) {
                let rate = Number(lineOfInput[0].split(` - `).pop());
                platsList[plant].rating.push(rate);
            } else if (command === `Update`) {
                let rarity = Number(lineOfInput[0].split(` - `).pop());
                platsList[plant].rarity = rarity;
            } else if (command === `Reset`) {
                platsList[plant].rating = [];
            }
        } else {
            console.log(`error`);
        }
        lineOfInput = input.shift();
    }
    for (let [key, value] of Object.entries(platsList)) {
        if (value.rating.length > 0) {
            let ratingArray = value.rating;
            averageScore = ratingArray.reduce((a, b) => a + b) / ratingArray.length;
        } else {
            averageScore = 0;
        }
        platsList[key].rating = averageScore.toFixed(2);
    }

    ratingArray = Object.values(platsList).map(x => x.rarity);

    let isDuplicatedRatings = ratingArray.some((val, index) => ratingArray.indexOf(val) !== index);

    let sortedList

    if (!isDuplicatedRatings) {
        sortedList = Object.entries(platsList).sort((a, b) => b[1].rarity - a[1].rarity);
    } else {
        sortedList = Object.entries(platsList).sort((a, b) => b[1].rating - a[1].rating);
    }

    console.log(`Plants for the exhibition:`);
    sortedList.forEach(x => console.log(`- ${x[0]}; Rarity: ${x[1].rarity}; Rating: ${x[1].rating}`));
}

solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

