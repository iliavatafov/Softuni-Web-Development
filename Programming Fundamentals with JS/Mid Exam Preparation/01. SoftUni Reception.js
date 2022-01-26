function softuniReception(arr) {

    let customersToServe = Number(arr.pop());
    let employeesProductivity = arr.map(x => Number(x));
    let totalProductivity = employeesProductivity[0] + employeesProductivity[1] + employeesProductivity[2];
    let hours = 0;

    while (customersToServe > 0) {
        hours++;
        if (hours % 4 != 0) {
            customersToServe -= totalProductivity;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}

softuniReception(['3','2','5','40'])