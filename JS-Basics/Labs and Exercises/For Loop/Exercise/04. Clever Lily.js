function smartLily(input) {

    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceOneToy = Number(input[2]);

    let money = 0;
    let totalMoney = 0;
    let countToys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10;
            totalMoney += money - 1;
        }
        else {
            countToys++;
        }
    }
    let moneyFromToys = countToys * priceOneToy;
    let total = totalMoney + moneyFromToys;

    if (total >= priceWashingMachine) {
        total -= priceWashingMachine;
        console.log(`Yes! ${total.toFixed(2)}`);
    }
    else {
        priceWashingMachine -= total;
        console.log(`No! ${priceWashingMachine.toFixed(2)}`);
    }
}
