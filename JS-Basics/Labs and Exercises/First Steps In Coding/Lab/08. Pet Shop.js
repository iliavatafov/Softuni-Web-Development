function petShop(input) {

    let numberOfDogs = Number(input[0]);
    let numberOfOtherAnimals = Number(input[1]);
    let foodForDogsPrice = 2.50;
    let foodForOtherAnimalsPrice = 4;
    let totalMoneySpendForDogFood = numberOfDogs * foodForDogsPrice;
    let totalMoneySpendForOtherAnimalsFood = numberOfOtherAnimals * foodForOtherAnimalsPrice;
    let totalSpentAmount = totalMoneySpendForDogFood + totalMoneySpendForOtherAnimalsFood;
    console.log(`${totalSpentAmount} lv.`);

}