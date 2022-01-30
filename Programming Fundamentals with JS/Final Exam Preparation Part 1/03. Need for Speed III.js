function solve(input) {

    let numberOfCars = Number(input.shift());

    let carList = {};

    for (let i = 0; i < numberOfCars; i++) {
        let currentCar = input.shift();
        let [car, distance, fuel] = currentCar.split(`|`);
        if (!carList.hasOwnProperty(car)) {
            carList[car] = [Number(distance), Number(fuel)];
        }
    }

    let currentLine = input.shift();

    while (currentLine != `Stop`) {
        let [command, car, parameterOne, fuel] = currentLine.split(` : `);

        switch (command) {
            case `Drive`:
                drive(carList, car, parameterOne, fuel);
                break;
            case `Refuel`:
                refuel(carList, car, parameterOne);
                break;
            case `Revert`:
                revert(carList, car, parameterOne);
                break;
        }
        currentLine = input.shift();
    }

    let sortedList = Object.entries(carList).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1][0] - a[1][0]);

    sortedList.forEach(x => console.log(`${x[0]} -> Mileage: ${x[1][0]} kms, Fuel in the tank: ${x[1][1]} lt.`));

    function drive(carList, car, parameterOne, fuel) {
        if (carList[car][1] >= fuel) {
            carList[car][1] -= Number(fuel);
            carList[car][0] += Number(parameterOne);
            console.log(`${car} driven for ${parameterOne} kilometers. ${fuel} liters of fuel consumed.`);
            if (carList[car][0] > 100000) {
                console.log(`Time to sell the ${car}!`);
                delete carList[car];
            }
        } else {
            console.log(`Not enough fuel to make that ride`);
        }
    }

    function refuel(carList, car, parameterOne) {
        parameterOne = Number(parameterOne)
        carList[car][1] += parameterOne;
        if (carList[car][1] > 75) {
            parameterOne -= carList[car][1] - 75;
            carList[car][1] = 75;
            console.log(`${car} refueled with ${parameterOne} liters`);
        } else {
            console.log(`${car} refueled with ${parameterOne} liters`);
        }
    }

    function revert(carList, car, parameterOne) {
        parameterOne = Number(parameterOne);
        carList[car][0] -= parameterOne;
        if (carList[car][0] < 10000) {
            carList[car][0] = 10000;
        } else {
            console.log(`${car} mileage decreased by ${parameterOne} kilometers`)
        }
    }
}