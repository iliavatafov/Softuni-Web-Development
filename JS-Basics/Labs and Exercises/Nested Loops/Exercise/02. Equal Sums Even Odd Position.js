function equalSumsEvenOddPosition(input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let currentNum = "";
    let printLine = "";

    for(i = startNum; i <= endNum; i++){
        currentNum = i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for(j = 0; j < currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j))
            if(j % 2 === 0){
                evenSum += currentDigit;
            }
            else{
                oddSum += currentDigit;
            }
        }
        if(evenSum === oddSum){
            printLine += `${currentNum} `;
        }
    }
    console.log(printLine)
}

equalSumsEvenOddPosition(["123456",
"124000"])

