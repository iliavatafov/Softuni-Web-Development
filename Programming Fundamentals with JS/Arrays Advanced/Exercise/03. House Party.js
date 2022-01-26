function houseParty(operations) {

    let copyOperations = operations.map(x => x);
    let listOfGuests = [];

    for (let i = 0; i < operations.length; i++) {
        let currentElement = copyOperations
            .shift(` `)
            .split(` `);

        if (currentElement.includes(`not`)) {
            if (listOfGuests.includes(currentElement[0])) {
                for (let j = 0; j < listOfGuests.length; j++) {
                    if (listOfGuests[j] === currentElement[0]) {
                        listOfGuests.splice(j, 1)
                    }
                }
            } else {
                console.log(`${currentElement[0]} is not in the list!`)
            }
        } else {
            if (!listOfGuests.includes(currentElement[0])) {
                listOfGuests.push(currentElement[0]);
            } else {
                console.log(`${currentElement[0]} is already in the list!`)
            }
        }
    }
    console.log(listOfGuests.join(`\n`))
}