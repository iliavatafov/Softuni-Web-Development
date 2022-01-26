function graduation(input){

    let index = 0;

    let name = input[index];
    index++;

    let currentGrade = input[index];
    index++;

    let sumGrades = Number(0);
    let counter = 0;
    let grade = 0;

    while(index <= 13){

        sumGrades += Number(currentGrade);        
        if(currentGrade < 4){
            counter++;
            if(counter >= 2){
                console.log(`${name} has been excluded at ${grade} grade`)
                break;
            }
        }
        grade++;
        currentGrade = input[index];
        index++;
    }
    let averageGrade = sumGrades / Number(grade);
    if(grade === 12){
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}


