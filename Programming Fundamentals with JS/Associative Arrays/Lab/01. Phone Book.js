function phoneBook(data) {
    let book = {};
    for ( let line of data) {
        let [personName, phoneNumber] = line.split(` `);
        book[personName] = phoneNumber;
    }
    for (let key in book) {
        console.log(`${key} -> ${book[key]}`)
    }
}

phoneBook(['Tim 0834212554',
'Tim 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)