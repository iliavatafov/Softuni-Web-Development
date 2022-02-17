function addItem() {

    let newItemTextElement = document.getElementById(`newItemText`);
    let newItemValueElement = document.getElementById(`newItemValue`);
    let menuElement = document.getElementById(`menu`);

    let newOption = document.createElement(`option`);

    newOption.value = newItemValueElement.value;
    newOption.textContent = newItemTextElement.value;

    if (newOption.value && newOption.textContent) {

        menuElement.appendChild(newOption);

        newItemTextElement.value = ``;
        newItemValueElement.value = ``;
    }
}