function sumPrimeNonPrime(input) {

    let numer = input.shift();

    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;

    while (numer != "stop") {
        let convertedNum = Number(numer);
        let countr = 0;

        if (convertedNum < 0) {
            console.log("Number is negative.");
            convertedNum = 0;
        }
        else {
            for (i = 1; i <= convertedNum; i++) {
                if (convertedNum % i === 0) {
                    countr++
                }
            }
        }
        if (countr === 2) {
            sumPrimeNums += convertedNum;
        }
        else {
            sumNonPrimeNums += convertedNum;
        }

        numer = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}


