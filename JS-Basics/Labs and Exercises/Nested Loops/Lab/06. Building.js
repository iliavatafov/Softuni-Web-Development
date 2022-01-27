function solve(input) {

    let numberFloors = input[0];

    let apartmentsPerFloor = input[1];

    for (let i = numberFloors; i >= 1; i--) {

        let printLine = "";

        for (let j = 0; j < apartmentsPerFloor; j++) {
            if (i === numberFloors) {
                printLine += "L" + i + j + " ";
            }
            else if (i % 2 === 0) {
                printLine += "O" + i + j + " ";
            }
            else {
                printLine += "A" + i + j + " ";
            }

        }
        console.log(printLine);

    }
}
