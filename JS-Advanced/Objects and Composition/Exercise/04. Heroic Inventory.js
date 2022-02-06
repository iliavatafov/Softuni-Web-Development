function solve(input) {

    let register = [];

    let elementOfInput = input.shift();

    while (elementOfInput) {
        let [name, level, items] = elementOfInput.split(` / `);
        items = items ? items.split(`, `) : [];
        level = Number(level);
        let currentPlayerData = {
            name,
            level,
            items,
        }

        register.push(currentPlayerData);
        elementOfInput = input.shift();
    }

    let registerToJSON = JSON.stringify(register);
    console.log(registerToJSON);
}