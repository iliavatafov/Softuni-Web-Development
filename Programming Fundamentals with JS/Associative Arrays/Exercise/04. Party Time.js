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
            guestList.vip.push(person)
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

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)