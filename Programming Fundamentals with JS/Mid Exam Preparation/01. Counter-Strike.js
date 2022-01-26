function counterStrike(arr) {
    let energy = Number(arr.shift());
    let index = 0;
    let wins = 0;

    for (let temp of arr) {
        if (temp === `End of battle`) {
            break;
        }
        distance = Number(temp);
        let currentResult = energy - distance;
        if (currentResult >= 0) {   
            wins++;         
            energy = currentResult;
            if (wins % 3 === 0) {
                energy += wins;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`)
            return;
        }
    }   
    console.log(`Won battles: ${wins}. Energy left: ${energy}`)
}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])


