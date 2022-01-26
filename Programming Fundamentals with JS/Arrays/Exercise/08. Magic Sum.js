function magicNum(arr, n) {

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === n) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}


