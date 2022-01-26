function sumEvenAndOdd(num) {

    let resultOdd = sumOdd(num);
    let resultEven = sumEven(num);

    console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven}`);

    function sumEven(num) {
        let numToString = num.toString();
        let result = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 === 0) {
                result += currentNum;
            }
        }
        return result
    }
    function sumOdd(num) {
        let numToString = num.toString();
        let result = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 !== 0) {
                result += currentNum;
            }
        }
        return result;
    }
}
