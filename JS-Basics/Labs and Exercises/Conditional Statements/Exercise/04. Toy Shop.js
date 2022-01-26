function toyShop(input){

    let priceExcurstion = Number(input[0]);
    let countPuzzels = Number(input[1]);
    let countDolls = Number(input[2]);
    let countBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let pricePuzzels = countPuzzels * 2.6;
    let priceDolls = countDolls * 3;
    let priceBears = countBears * 4.10;
    let priceMinions = countMinions * 8.2;
    let priceTrucks = countTrucks * 2;

    let totalIncome = priceBears + priceDolls + priceMinions + pricePuzzels + priceTrucks;

    let countOfAllToys = countBears + countDolls + countMinions + countPuzzels + countTrucks;

    if(countOfAllToys >= 50){
        totalIncome *= 0.75;
    }

    let rent = totalIncome * 0.10;

    let netIncome = totalIncome - rent;

    let ostavat = netIncome - priceExcurstion;
    let nedostig = priceExcurstion - netIncome;

    if(netIncome >= priceExcurstion){
        console.log(`Yes! ${ostavat.toFixed(2)} lv left.`);
    }
    else{
        console.log(`Not enough money! ${nedostig.toFixed(2)} lv needed.`);
    }

}