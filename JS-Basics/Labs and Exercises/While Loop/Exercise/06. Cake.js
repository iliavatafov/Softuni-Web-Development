function soleve(input) {

    let weight = input.shift();
    let hight = input.shift();
    let numberOfPicesTaken = input.shift();
    let cakeSize = Number(weight) * Number(hight);

    while (numberOfPicesTaken !== "STOP") {

        cakeSize -= numberOfPicesTaken;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }

        numberOfPicesTaken = input.shift();
    }
    if (numberOfPicesTaken === "STOP") {
        console.log(`${cakeSize} pieces are left.`);
    }
}



