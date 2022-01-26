function sumNumbers(input){

    let index = 0;

    let targetNum = Number(input[index]);
    index++;

    let currentNum = Number(input[index]);
    index++;

    let sum = 0;

    while(sum < targetNum){
        sum += Number(currentNum);
        currentNum = input[index];
        index++;
    }
    console.log(sum);

}

