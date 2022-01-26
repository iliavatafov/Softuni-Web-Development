function spiceMustFlow(startingYield) {

    let currentYeield = startingYield;
    let totalYeild = 0;
    let days = 0;

    while (currentYeield >= 100) {
        days++;
        totalYeild += currentYeield;
        totalYeild -= 26;
        if (totalYeild < 0) {
            totalYeild = 0;
        }
        currentYeield -= 10;
    }
    totalYeild -= 26;
    if (totalYeild < 0) {
        totalYeild = 0;
    }
    console.log(days);
    console.log(totalYeild)
}