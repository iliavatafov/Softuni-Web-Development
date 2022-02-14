function addItem() {



    let ulElement = document.getElementById(`items`);
    let inputTextElement = document.getElementById(`newItemText`);

    let newLiElement = document.createElement(`li`);
    newLiElement.textContent = inputTextElement.value;

    let remove = document.createElement(`a`);
    let linkText = document.createTextNode(`[Delete]`);

    remove.appendChild(linkText);
    remove.href = `#`;
    remove.addEventListener(`click`, deleteItem)

    newLiElement.appendChild(remove);
    ulElement.appendChild(newLiElement);

    inputTextElement.value = ``;

    function deleteItem() {
        newLiElement.remove();
    }

}