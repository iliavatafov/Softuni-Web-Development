function solve(employeesData, criteria) {

    let [key, value] = criteria.split(`-`);

    JSON.parse(employeesData)
        .filter(x => x[key] === value)
        .map((x, i) => console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`));

}