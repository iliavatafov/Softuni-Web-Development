function carWash(commands) {

    let pracentageClean = 10;

    for (let i = 1; i < commands.length; i++) {
        let currentCommand = commands[i];
        switch (currentCommand) {
            case `soap`:
                pracentageClean += 10;
                break;
            case `water`:
                pracentageClean *= 1.20;
                break;
            case `vacuum cleaner`:
                pracentageClean *= 1.25;
                break;
            case `mud`:
                pracentageClean *= 0.90;
                break;
        }
    }
    console.log(`The car is ${pracentageClean.toFixed(2)}% clean.`)
}