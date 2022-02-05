function solve(input) {

    let result = {};

    let elementOfInput = input.shift();

    while (elementOfInput) {
        let [city, population] = elementOfInput.split(`<->`);
        if (!result.hasOwnProperty(city)) {
            result[city] = Number(population);
        } else {
            result[city] += Number(population);
        }
        elementOfInput = input.shift();
    }

    Object.entries(result).forEach(x => console.log(`${x[0]}: ${x[1]}`));

}