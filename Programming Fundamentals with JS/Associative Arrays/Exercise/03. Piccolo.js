function solve(arr) {

    let parkingList = [];

    for (let element of arr) {
        let [command, carNumber] = element.split(`, `);
        if (command === `IN`) {
            if (!parkingList.includes(carNumber)) {
                parkingList.push(carNumber);
            }
        } else {
            if (parkingList.includes(carNumber)) {
                parkingList.splice(parkingList.indexOf(carNumber), 1);
            }
        }
    }
    if (parkingList.length > 0) {
        parkingList.sort((a, b) => a.localeCompare(b));
        console.log(parkingList.join(`\n`));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}
