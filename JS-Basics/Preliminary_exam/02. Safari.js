function safari(input){

    let buget = Number(input.shift());
    let neededFuel = Number(input.shift());
    let dayOfTheWeek = input.shift();

    let priceFuel = neededFuel * 2.10;
    let priceFuelAndSpeaker = priceFuel + 100;

    let discountedPrice = 0;

    if(dayOfTheWeek === "Saturday"){
        discountedPrice = priceFuelAndSpeaker * 0.90;
    }
    else if(dayOfTheWeek === "Sunday"){
        discountedPrice = priceFuelAndSpeaker * 0.80;
    }
    if(discountedPrice <= buget){
        let moneyLeft = buget - discountedPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`)
    }
    else{
        let moneyNeed = discountedPrice - buget;
        console.log(`Not enough money! Money needed: ${moneyNeed.toFixed(2)} lv.`)
    }
}

safari(["105.20",
"15",
"Sunday"])


