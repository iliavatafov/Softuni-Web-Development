function newHouse(input){

    let flower = input[0];
    let count = Number(input[1]);
    let buget = Number(input[2]);

    let price = 0;

    switch(flower){
        case "Roses":
            price = 5;
            if(count > 80){
                price *= 0.90;
            }
        break;
        case "Dahlias":
            price = 3.80;
            if(count > 90){
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = 2.80;
            if(count > 80){
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = 3;
            if(count < 120){
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = 2.50;
            if(count < 80){
                price *= 1.20;
            }
            break;
    }
    let neededMoney = price * count;
    
    if(neededMoney <= buget){
        let moneyLeft = buget - neededMoney;
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(2)} leva left.`)
    }
    else{
        let levaMore = neededMoney - buget;
        console.log(`Not enough money, you need ${levaMore.toFixed(2)} leva more.`)
    }
}

newHouse(["Gladiolus", "64", "160"])