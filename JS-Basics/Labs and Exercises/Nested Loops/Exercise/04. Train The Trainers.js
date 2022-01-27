function trainTheTrainers(input) {

    let jureyNumber = Number(input.shift());
    let presenetationName = input.shift();

    let presentationsNum = 0;
    let totalGrade = 0;

    while (presenetationName != "Finish") {

        let currentMark = 0;
        let totalMark = 0;

        for (i = 0; i < jureyNumber; i++) {

            currentMark = Number(input.shift());
            totalMark += currentMark;
        }

        presentationsNum++;

        let averageGrade = totalMark / jureyNumber;

        totalGrade += averageGrade;

        console.log(`${presenetationName} - ${averageGrade.toFixed(2)}.`);

        presenetationName = input.shift();
    }

    let totalAverageGrade = totalGrade / presentationsNum;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}

