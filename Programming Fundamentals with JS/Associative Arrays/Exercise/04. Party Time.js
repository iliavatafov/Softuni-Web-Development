function partyTime(input) {
    let guestList = {
        regular: [],
        vip: [],
    };

    let indexOfParty = input.indexOf(`PARTY`);
    let invited = input.slice(0, indexOfParty);
    let coming = input.slice(indexOfParty + 1);

    for (let person of invited) {
        let isVip = Number(person.split(``).shift());
        if (isNaN(isVip)) {
            guestList.regular.push(person);
        } else if (!isNaN(isVip)) {
            guestList.vip.push(person);
        }
    }

    for (let guest of coming) {
        if (guestList.regular.includes(guest)) {
            guestList.regular.splice(guestList.regular.indexOf(guest), 1);
        } else if (guestList.vip.includes(guest)) {
            guestList.vip.splice(guestList.vip.indexOf(guest), 1);
        }
    }
    let guestNotComming = guestList.regular.length + guestList.vip.length;

    console.log(guestNotComming);
    if (guestList.vip.length > 0) {
        console.log(guestList.vip.join(`\n`));
    }
    if (guestList.regular.length > 0) {
        console.log(guestList.regular.join(`\n`));
    }
}