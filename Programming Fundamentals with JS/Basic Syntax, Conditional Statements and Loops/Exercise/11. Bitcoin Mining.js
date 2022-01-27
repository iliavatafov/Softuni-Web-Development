function bitcoin(input) {

    let currentAmountOfGold = input.shift();
    let oneBitcoin = 11949.16;
    let oneGramGold = 67.51;
    let currentMoney = 0;
    let totalBitcoins = 0;
    let currentBitcoins = 0;
    let counterDays = 0;
    let firstDayBitcoin = 0;

    while (currentAmountOfGold) {
        counterDays++;
        if (counterDays % 3 === 0) {
            currentAmountOfGold *= 0.70;
        }
        currentMoney += currentAmountOfGold * oneGramGold;
        if (currentMoney >= oneBitcoin) {
            if (!firstDayBitcoin) {
                firstDayBitcoin = counterDays;
            }
            currentBitcoins = Math.floor(currentMoney / oneBitcoin);
            totalBitcoins += currentBitcoins;
            currentMoney -= currentBitcoins * oneBitcoin;
        }
        currentAmountOfGold = input.shift();
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (firstDayBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBitcoin}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}
