function solve(data) {
    let addressBook = {};
    for (let line of data) {
        let [name, address] = line.split(`:`);
        addressBook[name] = address;
    }
    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    entries.forEach(element => console.log(`${element[0]} -> ${element[1]}`))
}

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)