function solve(...input) {

    let result = {};

    input.forEach((element) => {

        console.log(`${typeof element}: ${element}`)

        if (!result.hasOwnProperty(typeof element)) {
            result[typeof element] = 0;
        }

        result[typeof element]++;
    });

    Object.keys(result)
        .sort((a, b) => result[b] - result[a])
        .map((x) => console.log(`${x} = ${result[x]}`));
}