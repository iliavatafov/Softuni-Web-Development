function colorize() {
    let table = document.getElementsByTagName(`tr`);

    for (let i = 1; i < table.length; i += 2) {
        table[i].style.background = `Teal`;
    }
}