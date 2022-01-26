function solve(data) {
    let schoolGradesMap = new Map();

    for (let line of data) {
        line = line.split(` `);
        let name = line.shift();
        let grades = line;
        if (schoolGradesMap.has(name)) {
            schoolGradesMap.get(name).forEach(x => grades.push(x));
            schoolGradesMap.set(name, grades);
        } else {
            schoolGradesMap.set(name, grades);
        }
    }

    for (let key of schoolGradesMap) {
        let result = 0;
        let counter = 0;
        for (let value of key[1]) {
            result += Number(value);
            counter++;
        }
        result /= counter;
        schoolGradesMap.set(key[0], result)
    }
    let sorted = Array.from(schoolGradesMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`${x[0]}: ${x[1].toFixed(2)}`));
}

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']

)