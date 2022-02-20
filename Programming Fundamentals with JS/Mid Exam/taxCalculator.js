function solve(input) {

    let inputString = input[0];
    let arrayFromInput = inputString.split(`>>`);

    let totalRevenue = 0;

    let currentLine = arrayFromInput.shift();

    while (currentLine) {

        let [carType, years, kilometers] = currentLine.split(` `);

        let taxes = 0;

        if (carType === `family`) {
            taxes = Math.floor(Number(kilometers) / 3000) * 12 + (50 - Number(years) * 5);
        } else if (carType === `heavyDuty`) {
            taxes = Math.floor(Number(kilometers) / 9000) * 14 + (80 - Number(years) * 8);
        } else if (carType === `sports`) {
            taxes = Math.floor(Number(kilometers) / 2000) * 18 + (100 - Number(years) * 9);
        } else {
            console.log(`Invalid car type.`);
            currentLine = arrayFromInput.shift();
            continue;
        }

        totalRevenue += taxes;

        console.log(`A ${carType} car will pay ${taxes.toFixed(2)} euros in taxes.`)

        currentLine = arrayFromInput.shift();
    }

    console.log(`The National Revenue Agency will collect ${totalRevenue.toFixed(2)} euros in taxes.`)
}

solve(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])