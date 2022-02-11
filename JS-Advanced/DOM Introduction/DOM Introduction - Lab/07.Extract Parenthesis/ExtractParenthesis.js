function extract(content) {

    let contentElement = document.getElementById(content).textContent;
    let pattern = /\((?<elements>[A-Za-z ]+)\)/g;
    let match = pattern.exec(contentElement);
    let printLine = [];

    while (match) {
        let element = match.groups.elements;
        printLine.push(element);
        match = pattern.exec(contentElement);
    }
    return printLine.join(`; `)
}