function radioCristal(arr) {

    let neededThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let currentThickness = arr[i];

        console.log(`Processing chunk ${currentThickness} microns`)

        let cut = (number) => number / 4;
        let lap = (number) => number - number * 0.20;
        let grind = (number) => number - 20;
        let etch = (number) => number - 2
        let xRay = (number) => number + 1;

        let cutsCounter = 0;
        let lapCounter = 0;
        let gridCounter = 0;
        let etchCounter = 0;
        let xRayCounter = 0;

        while (neededThickness !== currentThickness) {
            while (currentThickness / 4 >= neededThickness) {
                currentThickness = cut(currentThickness);
                cutsCounter++;
            }
            if (cutsCounter > 0) {
                console.log(`Cut x${cutsCounter}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
            while (currentThickness - currentThickness * 0.20 >= neededThickness) {
                currentThickness = lap(currentThickness);
                lapCounter++;
            }
            if (lapCounter > 0) {
                console.log(`Lap x${lapCounter}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
            while (currentThickness - 20 >= neededThickness) {
                currentThickness = grind(currentThickness);
                gridCounter++;
            }
            if (gridCounter > 0) {
                console.log(`Grind x${gridCounter}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
            while (currentThickness - 2 >= neededThickness - 1) {
                currentThickness = etch(currentThickness);
                etchCounter++;
            }
            if (etchCounter > 0) {
                console.log(`Etch x${etchCounter}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
            while (currentThickness < neededThickness) {
                currentThickness = xRay(currentThickness);
                xRayCounter++;
            }
            if (xRayCounter > 0) {
                console.log(`X-ray x${xRayCounter}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
        }
        console.log(`Finished crystal ${currentThickness} microns`)
    }
}






