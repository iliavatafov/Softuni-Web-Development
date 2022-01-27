function solve(data) {

    let addressBook = {};
    for (let line of data) {
        let [name, address] = line.split(`:`);
        addressBook[name] = address;
    }
    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    entries.forEach(element => console.log(`${element[0]} -> ${element[1]}`));
    
}