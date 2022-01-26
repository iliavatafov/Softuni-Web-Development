function solve(arr) {

    let hasFoundResult = false;

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumber = arr[leftIndex];
            sumLeft += currentNumber;
        }
        for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            let currentNum = arr[rightIndex];
            sumRight += currentNum;
        }
        if (sumLeft === sumRight) {
            console.log(i)
            hasFoundResult = true;
            break;
        }
    }

    if (!hasFoundResult) {
        console.log(`no`);
    }
}