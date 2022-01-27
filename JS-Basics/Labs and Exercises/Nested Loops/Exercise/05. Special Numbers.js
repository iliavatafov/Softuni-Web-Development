function specialNumbers(input) {

    let number = Number(input[0]);

    let num = "";

    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            for (k = 1; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {
                    if (number % i === 0 & number % j === 0 & number % k === 0 & number % l === 0) {
                        num += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }
    console.log(num);
}