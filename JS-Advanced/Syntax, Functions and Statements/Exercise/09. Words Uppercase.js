function solve(input) {

    let pattern = /[A-Za-z0-9]+/g;

    let match = input.match(pattern);

    let result = [];

    for (let element of match) {
        element = element.toUpperCase();
        result.push(element);
    }

    console.log(result.join(`, `));
}