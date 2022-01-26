function trip(input){

    let buget = Number(input[0]);
    let season = input[1];

    let spendAmount = 0;
    let country = "";
    let property = "";

    switch(season){
        case "summer":
        property = "Camp";
        if(buget <= 100){
            spendAmount = buget * 0.30;
            country = "Bulgaria";
        }
        else if(buget <= 1000){
            spendAmount = buget * 0.40;
            country = "Balkans";
        }
        else{
            spendAmount = buget * 0.90;
            country = "Europe";
            property = "Hotel";
        }
            break;
        case "winter":
            property = "Hotel";
            if(buget <= 100){
            spendAmount = buget * 0.70;
            country = "Bulgaria";
        }
        else if(buget <= 1000){
            spendAmount = buget * 0.80;
            country = "Balkans";
        }
        else{
            spendAmount = buget * 0.90;
            country = "Europe";
            property = "Hotel";
        }
            break;
    }
    console.log(`Somewhere in ${country}`)
    console.log(`${property} - ${spendAmount.toFixed(2)}`)
}