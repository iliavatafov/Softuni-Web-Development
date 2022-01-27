function vacation(input) {

    let index = 0;

    let neededAmount = Number(input[index]);
    index++;

    let money = Number(input[index]);
    index++;

    let typeOperation = input[index];
    index++;

    let amount = Number(input[index]);
    index++;

    let counterSpend = 0;
    let counterDays = 0;

    while (neededAmount > money) {

        counterDays++;

        if (typeOperation === "spend") {

            counterSpend++;

            money -= amount;

            if (money < 0) {
                money = 0;
            }

            if (counterSpend >= 5) {
                console.log("You can't save the money.")
                console.log(counterDays);
                break;
            }
        }
        else if (typeOperation === "save") {
            money += amount;
        }

        typeOperation = input[index];
        index++;

        amount = Number(input[index]);
        index++;
    }
    if (money >= neededAmount) {
        console.log(`You saved the money for ${counterDays} days.`);
    }
}



