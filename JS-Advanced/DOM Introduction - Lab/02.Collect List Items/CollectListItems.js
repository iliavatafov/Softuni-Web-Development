function extractText() {

    let listElements = document.querySelectorAll(`#items li`);
    let result = document.querySelector(`#result`)

    for (let node of listElements) {
        result.value += node.textContent + `\n`;
    }
}