function flightSchedule(arr) {

    let checkedStatus = arr[2].toString();
    result = [];
    let flag = false;

    for (let flight of arr[0]) {
        let [sector, arrivalCity] = flight.split(` `);
        for (let check of arr[1]) {
            let [sectorChange, statusToBeChanged] = check.split(` `);
            if (sector === sectorChange) {
                let resultObj = {
                    Destination: arrivalCity,
                    Status: statusToBeChanged,
                }
                result.push(resultObj);
                flag = true;
            }
        }
        if (!flag) {
            let resultObj = {
                Destination: arrivalCity,
                Status: `Ready to fly`,
            }
            result.push(resultObj);
        }
        flag = false;
    }
    result.forEach(element => {
        if (element.Status === checkedStatus) {
            console.log(element)
        }
    })
}
