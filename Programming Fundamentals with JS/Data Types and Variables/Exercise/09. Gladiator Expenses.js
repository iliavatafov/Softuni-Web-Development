function gladiatorExpencess(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let counter = 0;
    let counterArmour = 0;

    let helmet = 0;
    let sword = 0;
    let shild = 0;
    let armour = 0;

    for (let i = 0; i < lostFights; i++) {

        counter++;

        if (counter % 2 === 0 && counter % 3 === 0) {
            shild++;
            helmet++;
            sword++;
            if (shild % 2 === 0) {
                armour++;
            }
        }
        else if (counter % 2 === 0) {
            helmet++;
        }
        else if (counter % 3 === 0) {
            sword++;
        }
    }
    helmet *= helmetPrice;
    sword *= swordPrice;
    shild *= shieldPrice;
    armour *= armourPrice;
    let total = helmet + sword + shild + armour;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
