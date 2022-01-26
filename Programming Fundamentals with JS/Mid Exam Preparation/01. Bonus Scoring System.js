function bonusScore(arr) {

    let numberOfStudents = Number(arr.shift());
    let numberOfLectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let bonusPoints = 0;
    let isBonusHigher = 0;
    let higherBonus = 0;
    let bestStudentAttendance = 0;

    for (let attendances of arr) {
        bonusPoints = Number(attendances) / numberOfLectures * (5 + additionalBonus);
        if (bonusPoints >= isBonusHigher) {
            higherBonus = bonusPoints;
            bestStudentAttendance = Number(attendances);
            isBonusHigher = higherBonus;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(higherBonus)}.`);
    console.log(`The student has attended ${bestStudentAttendance} lectures.`)
}

bonusScore([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)