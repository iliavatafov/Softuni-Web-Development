function time(input){

    let sportistOne = Number(input[0]);
    let sportistTwo = Number(input[1]);
    let sportistThree = Number(input[2]);

    let totalTimeInSec = sportistOne + sportistTwo + sportistThree;

    let minutes = Math.floor(totalTimeInSec / 60);
    let seconds = totalTimeInSec % 60;
    
    if(seconds < 10){ 
    console.log(`${minutes}:0${seconds}`);
    }
    else{
        console.log(`${minutes}:${seconds}`);
    }
}
