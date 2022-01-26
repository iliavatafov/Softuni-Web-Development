function histogram(input){

    let leapYear = Number(input[0]);
    let anyYear = Number(input[1]);

    for(let i = leapYear; i <= anyYear; i++){
        if(i % 4 === 0){
            console.log(i);
        }
    }
}

histogram(["1908", "1919"])