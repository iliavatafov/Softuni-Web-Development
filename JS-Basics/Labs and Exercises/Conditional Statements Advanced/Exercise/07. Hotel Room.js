function roomHotel(input){

    let m = input[0];
    let n = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;    

    switch(m){

        case "May":
        case "Octomber":

        priceStudio = n * 50;
        priceApartment = n * 65;
        
        if(n > 7 && n <= 14){
            priceStudio *= 0.95;
        }

        if(n > 14){

            priceStudio *= 0.70;
            priceApartment *= 0.90;
        }

        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
            break;

        case "June":
        case "September": 

        priceStudio = n * 75.20;
        priceApartment = n * 68.70;

            if(n > 14){
                priceStudio *= 0.80;
                priceApartment *= 0.90;
            }

            console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
            break;

        case "July":
        case "August":

            priceStudio = n * 76;
            priceApartment = n * 77;

            if(n > 14){                
                priceApartment *= 0.90;
            }

            console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
            break;
    }
}


roomHotel(["May", "15"])