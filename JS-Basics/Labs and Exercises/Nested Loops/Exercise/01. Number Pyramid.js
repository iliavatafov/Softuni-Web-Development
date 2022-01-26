function pyramideNumbers(input){

    let number = input[0];

    let printLine = "";
    let currentNum = 1;
    let isBigger = false;

    for(i = 1; i <= number; i++){
        for(j = 1; j <= i; j++){
            if(currentNum > number){
                isBigger = true;
                break;
            }
            printLine += currentNum + " ";
            currentNum++;
        }
        console.log(printLine);
        printLine = "";
        if(isBigger){
            break;
        }
    }
    
}

pyramideNumbers(["15"])