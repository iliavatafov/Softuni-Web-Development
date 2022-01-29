function solve(input) {

    let numberOfPartyMembers = input.shift();

    let partyMembers = {};

    for (let i = 0; i < numberOfPartyMembers; i++) {
        let [heroName, HP, MP] = input.shift().split(` `);
        if (!partyMembers.hasOwnProperty(heroName)) {
            partyMembers[heroName] = [Number(HP), Number(MP)];
        }
    }

    let lineOfInput = input.shift();

    while (lineOfInput !== `End`) {

        let [command, heroName, amount, spellOrAttackerName] = lineOfInput.split(` - `);

        switch (command) {
            case `CastSpell`:
                castSpell(partyMembers, heroName, amount, spellOrAttackerName);
                break;
            case `TakeDamage`:
                takeDamage(partyMembers, heroName, amount, spellOrAttackerName);
                break;
            case `Recharge`:
                recharge(partyMembers, heroName, amount);
                break;
            case `Heal`:
                heal(partyMembers, heroName, amount);
                break;
        }
        lineOfInput = input.shift();
    }

    Object.entries(partyMembers).forEach(x => {
        console.log(x[0]);
        console.log(`  HP: ${x[1][0]}`);
        console.log(`  MP: ${x[1][1]}`);
    });

    function castSpell(partyMembers, heroName, amount, spellOrAttackerName) {
        if (partyMembers.hasOwnProperty(heroName) && partyMembers[heroName][1] >= Number(amount)) {
            partyMembers[heroName][1] -= Number(amount);
            console.log(`${heroName} has successfully cast ${spellOrAttackerName} and now has ${partyMembers[heroName][1]} MP!`);
        } else if (partyMembers.hasOwnProperty(heroName)) {
            console.log(`${heroName} does not have enough MP to cast ${spellOrAttackerName}!`)
        }
    }

    function takeDamage(partyMembers, heroName, amount, spellOrAttackerName) {
        if (partyMembers.hasOwnProperty(heroName) && partyMembers[heroName][0] > amount) {
            partyMembers[heroName][0] -= Number(amount);
            console.log(`${heroName} was hit for ${amount} HP by ${spellOrAttackerName} and now has ${partyMembers[heroName][0]} HP left!`)
        } else if (partyMembers.hasOwnProperty(heroName)) {
            console.log(`${heroName} has been killed by ${spellOrAttackerName}!`);
            delete partyMembers[heroName];
        }
    }

    function recharge(partyMembers, heroName, amount) {
        partyMembers[heroName][1] += Number(amount);
        if (partyMembers.hasOwnProperty(heroName) && partyMembers[heroName][1] > 200) {
            amount -= partyMembers[heroName][1] - 200;
            partyMembers[heroName][1] = 200;
            console.log(`${heroName} recharged for ${amount} MP!`);
        } else {
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
    }

    function heal(partyMembers, heroName, amount) {
        partyMembers[heroName][0] += Number(amount);
        if (partyMembers.hasOwnProperty(heroName) && partyMembers[heroName][0] > 100) {
            amount -= partyMembers[heroName][0] - 100;
            partyMembers[heroName][0] = 100;
            console.log(`${heroName} healed for ${amount} HP!`);
        } else {
            console.log(`${heroName} healed for ${amount} HP!`)
        }
    }
}