function film(input){

    let filmBuget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceSuitesForOneStatist = Number(input[2]);

    let decorPrice = filmBuget * 0.10;
    let priceSuits = countStatists * priceSuitesForOneStatist;
    if(countStatists > 150){
        priceSuits *= 0.90;        
    }
    
    let totalExpences = decorPrice + priceSuits;
    let ostatuk = filmBuget - totalExpences;
    let nedostig = totalExpences - filmBuget;

    if(totalExpences <= filmBuget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${ostatuk.toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${nedostig.toFixed(2)} leva more.`);
    }
}