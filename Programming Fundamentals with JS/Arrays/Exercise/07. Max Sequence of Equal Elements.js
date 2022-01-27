function maxSeqOfElements(arr) {

    let biggestSequance = ``;
    let biggestCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentCounter = 1;
        let currentSequance = arr[i].toString() + ` `;
        while (currentNum === arr[i + 1]) {
            currentSequance += arr[i + 1] + ` `;
            currentCounter++;
            i++;
        }
        if (currentCounter > biggestCounter) {
            biggestCounter = currentCounter;
            biggestSequance = currentSequance;
        }
    }
    console.log(biggestSequance);
}
