function time15(input){

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let minutesPlus15 = minutes + 15;

    let additionalHours = Math.floor(minutesPlus15 / 60);
    let additionalMinutes = minutesPlus15 % 60;

    let currentHour = hour + additionalHours;
    let currentMinutes = additionalMinutes;

    if(currentHour >= 24){
        currentHour = 0
        if(currentMinutes < 10){
        console.log(`${currentHour}:0${currentMinutes}`);
        }
        else{
            console.log(`${currentHour}:${currentMinutes}`);
        }
    }
    else{
        if(currentMinutes < 10){
            console.log(`${currentHour}:0${currentMinutes}`);
            }
            else{
                console.log(`${currentHour}:${currentMinutes}`);
            }
    }    
}