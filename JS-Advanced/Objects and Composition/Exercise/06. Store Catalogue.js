function solve(input) {

    let result = {};

    let lineOfInput = input.shift();

    while (lineOfInput) {
        let [productName, productPrice] = lineOfInput.split(` : `);
        productPrice = Number(productPrice);
        let firstLetter = productName.split(``)[0];
        if (firstLetter.toUpperCase() === firstLetter) {
            if (!result.hasOwnProperty(firstLetter)) {
                result[firstLetter] = {
                    [productName]: productPrice,
                }
            } else {
                result[firstLetter][productName] = productPrice;
            }
        }
        lineOfInput = input.shift();
    }

    for (let list in result) {
        let sorted = Object.entries(result[list]).sort((a, b) => a[0].localeCompare(b[0]));
        result[list] = {};
        sorted.forEach(x => result[list][x[0]] = x[1]);
    }

    let sortedList = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    for (let line of sortedList) {
        console.log(line[0]);
        for (let element in line[1]) {
            console.log(`${element}: ${line[1][element]}`);
        }
    }
}