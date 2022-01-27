function solve(arr) {

    let listOfArmies = {};

    for (let element of arr) {
        if (element.includes(`arrives`)) {
            element = element.split(` `);
            let command = element.pop();
            element = element.join(` `);
            listOfArmies[element] = {};
        } else if (element.includes(`:`)) {
            element = element.split(`: `);
            let general = element.shift();
            if (listOfArmies.hasOwnProperty(general)) {
                let [armyName, armyCount] = element[0].split(`, `);
                listOfArmies[general][armyName] = Number(armyCount);
            }
        } else if (element.includes(`+`)) {
            let [armyName, armyCount] = element.split(` + `)
            for (let [general, armies] of Object.entries(listOfArmies)) {
                if (armies.hasOwnProperty(armyName)) {
                    listOfArmies[general][armyName] += Number(armyCount);
                }
            }
        } else if (element.includes(`defeated`)) {
            element = element.split(` `);
            let command = element.pop();
            let general = element.join(` `);
            if (listOfArmies.hasOwnProperty(general)) {
                delete listOfArmies[general];
            }
        }
    }
    for (let [key, value] of Object.entries(listOfArmies)) {
        if (Object.keys(value).length === 0) {
            listOfArmies[key].totalSoldiers = 0;
        }
    }
    for (let [general, armies] of Object.entries(listOfArmies)) {
        let totalSoldiers = Object.values(armies).reduce((a, b) => a + b);
        listOfArmies[general].totalSoldiers = totalSoldiers;
    }
    let sortedByTotalSoldiers = Object.entries(listOfArmies)
        .sort((a, b) => b[1].totalSoldiers - a[1].totalSoldiers);
    for (let element of sortedByTotalSoldiers) {
        let generalName = element.shift();
        let totalSoldiers = element[0].totalSoldiers;
        delete element[0].totalSoldiers;
        console.log(`${generalName}: ${totalSoldiers}`)
        let sortedArmies = Object.entries(element[0])
            .sort((a, b) => b[1] - a[1])
            .forEach(x => console.log(`>>> ${x[0]} - ${x[1]}`));
    }

}