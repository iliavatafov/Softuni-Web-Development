function solve(string) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g

    let match = pattern.exec(string);

    let travelPoints = 0;

    let travelDestinations = [];

    while (match) {
        travelDestinations.push(match.groups.destination);
        travelPoints += match.groups.destination.length;
        match = pattern.exec(string);
    }

    console.log(`Destinations: ${travelDestinations.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve("ThisIs some InvalidInput")