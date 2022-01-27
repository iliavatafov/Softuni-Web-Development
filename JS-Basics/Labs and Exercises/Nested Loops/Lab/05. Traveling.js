function solve(input) {

    let destination = input.shift();
    let minBuget = input.shift();
    let deposit = input.shift();
    let totalSaved = 0;

    while (destination !== "End") {

        while (totalSaved < minBuget) {
            totalSaved += Number(deposit);
            if (totalSaved >= minBuget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            deposit = input.shift();
        }
        totalSaved = 0;
        destination = input.shift();
        minBuget = input.shift();
        deposit = input.shift();
    }
}




