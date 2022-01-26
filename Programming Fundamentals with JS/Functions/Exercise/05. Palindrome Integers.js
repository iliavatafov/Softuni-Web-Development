function palindromIntgers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        currentNum = currentNum.toString();
        currentNum = currentNum.split(``);
        let checkOne = [];

        for (let j = currentNum.length - 1; j >= 0; j--) {
            checkOne.push(currentNum[j]);
        }

        checkOne = checkOne.toString();
        currentNum = currentNum.toString();

        if (currentNum === checkOne) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
