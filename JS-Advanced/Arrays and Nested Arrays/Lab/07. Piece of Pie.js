function solve(pieFlavors, targetFlavorOne, targetFlavorTwo) {

    let result = [];
    let currentFlavor = ``;

    while (currentFlavor !== targetFlavorTwo) {
        currentFlavor = pieFlavors.shift();
        if (currentFlavor === targetFlavorOne) {
            while (currentFlavor !== targetFlavorTwo) {
                result.push(currentFlavor);
                currentFlavor = pieFlavors.shift();
            }
            result.push(currentFlavor);
            break;
        }
    }
    return result;
}