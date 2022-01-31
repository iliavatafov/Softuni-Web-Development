function solve(input) {

    let pattern = /([|#])(?<productName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g

    let match = pattern.exec(input);

    let totalCalories = 0;

    let listOfItems = [];

    while (match !== null) {

        listOfItems.push({ productName: match[2], expirationDate: match[3], calories: match[4] });
        totalCalories += Number(match[4]);

        match = pattern.exec(input);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    listOfItems.forEach(x => console.log(`Item: ${x.productName}, Best before: ${x.expirationDate}, Nutrition: ${x.calories}`));

}