function walking(input) {

    let index = 0;

    let currentSteps = input[index];
    index++;

    let totalSteps = Number(0);

    while (totalSteps < 10000) {
        if (currentSteps !== "Going home") {
            stepsNow = Number(currentSteps);
            totalSteps += stepsNow;
        }

        if (currentSteps === "Going home") {

            currentSteps = input[index];
            index++;

            stepsNow = Number(currentSteps);

            totalSteps += stepsNow;

            if (totalSteps > 10000) {
                let stepsOver = totalSteps - 10000;
                console.log("Goal reached! Good job!");
                console.log(`${stepsOver} steps over the goal!`);
                break;
            }
            else {
                let neededSteps = 10000 - totalSteps;
                console.log(`${neededSteps} more steps to reach goal.`);
            }

        }
        if (totalSteps > 10000) {
            let stepsOver = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsOver} steps over the goal!`);
            break;
        }

        currentSteps = input[index];
        index++;
    }
}