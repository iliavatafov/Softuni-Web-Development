function solve() {

    let input = document.getElementById(`input`);
    let output = document.getElementById(`output`);
    output.textContent = ``;

    let arrFromInput = input.value.split(`.`).filter(x => x !== ``);

    while (arrFromInput.length > 0) {

        let text = arrFromInput.splice(0, 3).join(`. `) + `.`;
        let p = document.createElement(`p`);
        p.textContent = text;
        output.appendChild(p);
    }
}