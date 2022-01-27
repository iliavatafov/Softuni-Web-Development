function phoneBook(data) {
    let book = {};
    for (let line of data) {
        let [personName, phoneNumber] = line.split(` `);
        book[personName] = phoneNumber;
    }
    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}
