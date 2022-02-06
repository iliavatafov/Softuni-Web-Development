function solve(input) {

    let result = {};

    let lineOfInput = input.shift();

    while (lineOfInput) {

        let [townName, productName, productPrice] = lineOfInput.split(` | `);
        productPrice = Number(productPrice);
        if (!result.hasOwnProperty(productName)) {
            result[productName] = { townName, productPrice };
        } else {
            if (result[productName].productPrice > productPrice) {
                result[productName] = { townName, productPrice };
            }
        }

        lineOfInput = input.shift();
    }

    for (let product in result) {
        console.log(`${product} -> ${result[product].productPrice} (${result[product].townName})`);
    }
}