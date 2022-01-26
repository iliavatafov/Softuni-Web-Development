function grade(grade) {

    let result;

    if (grade < 3) {
        result = "Fail";
        grade = 2;
    } else if (grade < 3.5) {
        result = "Poor"
    } else if (grade < 4.5) {
        result = "Good";
    } else if (grade < 5.5) {
        result = "Very good"
    } else {
        result = "Excellent"
    }
    if (grade === 2) {
        console.log(`${result} (${grade})`);
    } else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}
