function muOnline(arr) {

    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;

    arr = arr.split(`|`);

    for (let currentOperation of arr) {
        let [operation, value] = currentOperation.split(` `);
        value = Number(value);

        switch (operation) {
            case `potion`:
                bestRoom++;
                health += value;
                if (health > 100) {
                    value -= health - 100;
                    health = 100;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`)
                break;
            case `chest`:
                bestRoom++;
                console.log(`You found ${value} bitcoins.`);
                bitcoins += value;
                break;
            default:
                health -= value;
                if (health > 0) {
                    bestRoom++;
                    console.log(`You slayed ${operation}.`);                                       
                } else {
                    bestRoom++;
                    console.log(`You died! Killed by ${operation}.`);
                    console.log(`Best room: ${bestRoom}`); 
                    return;
                }
                break;
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");