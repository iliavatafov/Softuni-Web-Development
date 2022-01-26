function solve(input) {
    let pattern = /^>>(?<furnitureName>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)$/;
    let furniture = [];
    let total = 0;

    while (input[0] !== `Purchase`) {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match !== null) {
            let { furnitureName, price, quantity } = match.groups;
            price = Number(price);
            quantity = Number(quantity);
            furniture.push(furnitureName);
            total += price * quantity;
        }
    }

    console.log(`Bought furniture:`);

    if (furniture.length !== 0) {
        console.log(furniture.join(`\n`));
    }

    console.log(`Total money spend: ${total.toFixed(2)}`)

}

solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"])