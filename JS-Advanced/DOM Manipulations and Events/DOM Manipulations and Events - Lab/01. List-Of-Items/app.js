function addItem() {

    let newTextElement = document.createElement(`li`);

    let input = document.getElementById(`newItemText`).value;
    newTextElement.textContent = input;

    let ulElement = document.getElementById(`items`);
    ulElement.appendChild(newTextElement);

}