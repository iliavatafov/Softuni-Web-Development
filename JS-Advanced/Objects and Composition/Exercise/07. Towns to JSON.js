function solve(input) {
    class Town {
        constructor(city, latitude, longitude) {
            this.Town = city;
            this.Latitude = latitude;
            this.Longitude = longitude;
        }
    }
    let result = [];
    let firstLine = input.shift();
    let currentTown = input.shift();

    while (currentTown) {
        currentTown = currentTown.split(``);
        currentTown.splice(0, 2);
        currentTown.splice(currentTown.length - 2, 2);
        let [city, latitude, longitude] = currentTown.join(``).split(` | `);
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        let newTown = new Town(city, latitude, longitude);
        result.push(newTown);
        currentTown = input.shift();
    }
    let resultJSON = JSON.stringify(result);
    console.log(resultJSON);
}