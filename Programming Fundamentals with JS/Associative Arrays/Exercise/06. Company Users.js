function solve(arr) {
    let usersList = {};
    for (let list of arr) {
        let [companyName, userID] = list.split(` -> `);
        if (!usersList.hasOwnProperty(companyName)) {
            usersList[companyName] = [];
            usersList[companyName].push(userID);
        } else {
            usersList[companyName].push(userID);
        }
    }

    let sorted = Object.keys(usersList).sort((a, b) => a.localeCompare(b));

    for (let company of sorted) {
        let userListSet = new Set(usersList[company])
        usersList[company] = Array.from(userListSet)
        console.log(`${company}`);
        usersList[company].forEach(element => {
            console.log(`-- ${element}`)
        });
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

)