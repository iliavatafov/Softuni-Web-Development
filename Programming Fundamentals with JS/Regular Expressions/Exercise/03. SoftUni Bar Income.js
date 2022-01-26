function solve(input) {

    let currentElement = input.shift();
    let pattern = /^%(?<name>[A-Z][a-z]+)%(?:[^\.\$\|%]+)?<(?<product>\w+)>(?:[^\.\$\|%]+)?\|(?<count>\d+)\|(?:[^\.\$\|%[0-9]+)?(?<price>\d+(?:\.\d+)?)\$$/
    let total = 0;

    while(currentElement !== `end of shift`) {
        let match = pattern.exec(currentElement);
        if (match !== null) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            total += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
        currentElement = input.shift()
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

solve(["%InvalidName%<Croissant>|2|10.3$",
"%Peter%<Gum>1.3$",
"%Maria%<Cola>|1|2.4",
"%Valid%<Valid>valid|10|valid20$",
"end of shift"]
)