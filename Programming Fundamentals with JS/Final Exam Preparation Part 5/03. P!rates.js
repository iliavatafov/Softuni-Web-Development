function solve(input) {

    let lineOfInput = input.shift();

    let targets = {};

    while (lineOfInput !== `Sail`) {

        let [city, population, gold] = lineOfInput.split(`||`);

        if (!targets.hasOwnProperty(city)) {
            targets[city] = [Number(population), Number(gold)];
        } else {
            targets[city][0] += Number(population);
            targets[city][1] += Number(gold);
        }

        lineOfInput = input.shift();
    }

    lineOfInput = input.shift();

    while (lineOfInput !== `End`) {

        let [activity, p1, p2, p3] = lineOfInput.split(`=>`);

        if (activity === `Plunder`) {

            targets[p1][0] -= Number(p2);
            targets[p1][1] -= Number(p3);

            if (targets[p1][0] <= 0 || targets[p1][1] <= 0) {
                if (targets[p1][0] < 0) {
                    p2 = Number(p2) + Number(targets[p1][0]);
                } else if (targets[p1][1] < 0) {
                    p3 = Number(p3) + Number(targets[p1][1]);
                }

                delete targets[p1];

                console.log(`${p1} plundered! ${p3} gold stolen, ${p2} citizens killed.`);
                console.log(`${p1} has been wiped off the map!`);

            } else {
                console.log(`${p1} plundered! ${p3} gold stolen, ${p2} citizens killed.`);
            }

        } else if (`Prosper`) {

            let amountOfGold = Number(p2);

            if (amountOfGold > 0) {

                targets[p1][1] += amountOfGold;

                console.log(`${p2} gold added to the city treasury. ${p1} now has ${targets[p1][1]} gold.`)
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }

        lineOfInput = input.shift();
    }

    let citiesToPrint = Object.values(targets).length;

    if (citiesToPrint > 0) {

        console.log(`Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`);

        Object.entries(targets)
            .forEach(x => {
                console.log(`${x[0]} -> Population: ${x[1][0]} citizens, Gold: ${x[1][1]} kg`)
            });

    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

