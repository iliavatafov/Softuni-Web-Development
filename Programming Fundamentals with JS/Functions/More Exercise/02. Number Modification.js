function numberModification(num) {

    let numToString = num.toString();
    let sumNums = 0;
    let counter = 0;
    let arr = [];

    for (let i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);
        sumNums += currentNum;
        arr.push(currentNum);
        counter++;
    }
    if (sumNums / counter >= 5) {
        console.log(num);
    } else {
        while (sumNums / counter < 5) {
            sumNums += 9;
            counter++;
            arr.push(9);
        }
        arr.toString();
        console.log(arr.join(``))
    }
}
