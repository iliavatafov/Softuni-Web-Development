function examPreparation(input) {

    let index = 0;

    let numberBadMarks = Number(input[index]);
    index++;

    let currentProblemName = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let counter = Number(0);
    let counterProblems = Number(0);
    let sumGrades = Number(0);
    let nameLastTask = "";

    while (currentProblemName !== "Enough") {

        if (grade <= 4) {

            counter++;

            if (counter >= numberBadMarks) {
                console.log(`You need a break, ${counter} poor grades.`);
                break;
            }
        }
        counterProblems++;
        sumGrades += grade;
        nameLastTask = currentProblemName;
        currentProblemName = input[index];
        index++;

        grade = Number(input[index]);
        index++
    }
    let averageGrade = sumGrades / counterProblems;

    if (currentProblemName === "Enough") {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${counterProblems}`);
        console.log(`Last problem: ${nameLastTask}`);
    }
}

