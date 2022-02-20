function solve(input) {

    let numberOfCities = Number(input.shift());
    let totalProfit = 0;
    let counter = 0;

    while (counter !== numberOfCities) {
        let cityName = input.shift();
        let earnedMoney = Number(input.shift());
        let expenses = Number(input.shift());
        counter++;

        if (counter % 5 === 0 && counter > 0) {
            earnedMoney *= 0.90;
        } else if (counter % 3 === 0 && counter > 0) {
            expenses *= 1.50;
        }

        let currentProfit = earnedMoney - expenses;

        totalProfit += currentProfit;

        console.log(`In ${cityName} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

solve(["15",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60",
    "Lille",
    "2226.00",
    "1200.60"
])