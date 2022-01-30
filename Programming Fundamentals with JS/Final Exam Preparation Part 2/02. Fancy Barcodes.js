function solve(input) {

    let numberOfProducts = Number(input.shift());

    let pattern = /@#+(?<barCode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/

    for (let i = 0; i < numberOfProducts; i++) {
        let product = input.shift();
        let match = pattern.exec(product);
        if (match === null) {
            console.log(`Invalid barcode`);
        } else {
            let group = match.groups.barCode.split(``).filter(x => !isNaN(x)).join(``);
            if (group.length === 0) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${group}`);
            }

        }
    }
}

solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
