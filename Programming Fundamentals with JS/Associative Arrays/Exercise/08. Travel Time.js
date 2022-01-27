function solve(arr) {
    let travelDestinations = {}

    for (let list of arr) {
        let [country, city, price] = list.split(` > `);
        if (!travelDestinations.hasOwnProperty(country)) {
            travelDestinations[country] = {};
            travelDestinations[country][city] = Number(price);
        } else if (travelDestinations[country].hasOwnProperty(city)) {
            if (Number(price) < travelDestinations[country][city]) {
                travelDestinations[country][city] = Number(price);
            }
        } else {
            travelDestinations[country][city] = Number(price);
        }
    }

    let objectKeys = Object.keys(travelDestinations).sort((a, b) => a.localeCompare(b));

    for (let country of objectKeys) {
        let sortedValuse = Array.from(Object.entries(travelDestinations[country]).sort((a, b) => a[1] - b[1]))
        townAsString = sortedValuse.map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townAsString.join(` `)}`);
    }
}