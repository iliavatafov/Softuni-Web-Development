function fishingBoat(input){

    let buget = Number(input[0]);
    let season = input[1];
    let countFishermans = input[2];

    let boatPrice = 0;

    switch(season){
        case "Spring":
            boatPrice = 3000;
            if(countFishermans <= 6){
                boatPrice *= 0.9;
            }
            else if(countFishermans > 6 && countFishermans <= 11){
                boatPrice *= 0.85;
            }
            else{
                boatPrice *= 0.75;
            }
            if(countFishermans % 2 === 0){
                boatPrice *= 0.95;
            }
        break;
        case "Autumn":
        case "Summer":  
            boatPrice = 4200;
            if(countFishermans <= 6){
                boatPrice *= 0.9;
            }
            else if(countFishermans > 6 && countFishermans <= 11){
                boatPrice *= 0.85;
            }
            else{
                boatPrice *= 0.75;
            }
            if(countFishermans % 2 === 0 && season != "Autumn"){
                boatPrice *= 0.95;
            }
            break;               
        case "Winter":
            boatPrice = 2600;
            if(countFishermans <= 6){
                boatPrice *= 0.9;
            }
            else if(countFishermans > 6 && countFishermans <= 11){
                boatPrice *= 0.85;
            }
            else{
                boatPrice *= 0.75;
            }
            if(countFishermans % 2 === 0){
                boatPrice *= 0.95;
            }
        break;
    }
    if(buget >= boatPrice){
        let moneyLeft = buget - boatPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }
    else{
        let neededAmount = boatPrice - buget;
        console.log(`Not enough money! You need ${neededAmount.toFixed(2)} leva.`)
    }    
}

fishingBoat(["2000", "Winter", "13"])