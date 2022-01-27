function fruitShops(input) {

    let product = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (dayOfTheWeek) {
        default:
            console.log("error");
            return;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":
                    price = 2.50;
                    break;
                case "apple":
                    price = 1.20;
                    break;
                case "orange":
                    price = 0.85;
                    break;
                case "grapefruit":
                    price = 1.45;
                    break;
                case "kiwi":
                    price = 2.70;
                    break;
                case "pineapple":
                    price = 5.50;
                    break;
                case "grapes":
                    price = 3.85;
                    break;
                default:
                    console.log("error");
                    return;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana":
                    price = 2.70;
                    break;
                case "apple":
                    price = 1.25;
                    break;
                case "orange":
                    price = 0.90;
                    break;
                case "grapefruit":
                    price = 1.60;
                    break;
                case "kiwi":
                    price = 3.00;
                    break;
                case "pineapple":
                    price = 5.60;
                    break;
                case "grapes":
                    price = 4.20;
                    break;
                default:
                    console.log("error");
                    break;
            }

    }
    let total = quantity * price;
    console.log(total.toFixed(2));
}