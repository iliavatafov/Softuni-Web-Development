function solve(text) {
    let result = [];
    text = text.split(` `).forEach(element => {
        if(element.startsWith(`#`)) {
            element = element.split(``).slice(1);
            let check = false;
            for (let character of element) {
                if (character.toLowerCase() === character.toUpperCase()) {
                    check = true;
                }
            }
            if (!check && element.length > 0) {
                result.push(element.join(``));
            }
        }
    });
    console.log(result.join(`\n`));
}