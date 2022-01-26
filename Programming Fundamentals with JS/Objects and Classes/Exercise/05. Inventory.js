function inventory(arr) {

    let result = [];

    for (let element of arr) {
        let el = element.split(` / `);
        let Hero = el.shift();
        let level = Number(el.shift());
        let items = el.toString();
        let heroesData = {
            Hero,
            level,
            items,
        }
        result.push(heroesData);
    }
    result.sort((a, b) => a.level - b.level);

    result.forEach(element => {
        for (let [key, value] of Object.entries(element)) {
            if (key === `Hero`) {
                console.log(`${key}: ${value}`);
            } else {
                console.log(`${key} => ${value}`);
            }
        }
    });
}