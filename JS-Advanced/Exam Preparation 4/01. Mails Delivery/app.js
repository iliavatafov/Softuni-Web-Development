function solve() {

    const recipientElement = document.querySelector(`#recipientName`);
    const titleElement = document.querySelector(`#title`);
    const messageElement = document.querySelector(`#message`);

    const inputElements = [recipientElement, titleElement, messageElement];

    const ulListElement = document.querySelector(`#list`);
    const ulSentList = document.querySelector(`.sent-list`);
    const ulDeleteList = document.querySelector(`.delete-list`);

    const addBtn = document.querySelector(`#add`);
    const resetBtn = document.querySelector(`#reset`);

    resetBtn.addEventListener(`click`, (event) => {
        event.preventDefault();
        for (let element of inputElements) {
            element.value = ``;
        }
    });

    addBtn.addEventListener(`click`, addToList);

    function addToList(event) {
        event.preventDefault();

        if (recipientElement.value && titleElement.value && messageElement.value) {

            const li = elementCreator(`li`);
            const h4TitleElement = elementCreator(`h4`, undefined, undefined, `Title: ${titleElement.value}`);
            const h4RecipientElement = elementCreator(`h4`, undefined, undefined, `Recipient Name: ${recipientElement.value}`);
            const span = elementCreator(`span`, undefined, undefined, messageElement.value);
            const divBtnContainer = elementCreator(`div`, `id`, `list-action`);

            const sendBtn = elementCreator(`button`, `type`, `submit`, `Send`);
            sendBtn.setAttribute(`id`, `send`);
            const deleteBtn = elementCreator(`button`, `type`, `submit`, `Delete`);
            deleteBtn.setAttribute(`id`, `delete`);

            divBtnContainer.appendChild(sendBtn);
            divBtnContainer.appendChild(deleteBtn);

            li.appendChild(h4TitleElement);
            li.appendChild(h4RecipientElement);
            li.appendChild(span);
            li.appendChild(divBtnContainer);

            ulListElement.appendChild(li);

            const title = titleElement.value;
            const recipient = recipientElement.value;

            for (let element of inputElements) {
                element.value = ``;
            }

            sendBtn.addEventListener(`click`, sendEmail.bind(this, li, recipient, title));
            deleteBtn.addEventListener(`click`, deleteMails.bind(this, `To: ${recipient}`, `Title: ${title}`, li));

        }
    }

    function deleteMails(recipient, title, elementForRemove) {

        const deleteMailsLiElement = elementCreator(`li`);
        const deleteMailsRecipientSpan = elementCreator(`span`, undefined, undefined, recipient);
        const deleteMailsTitleSpan = elementCreator(`span`, undefined, undefined, title);

        deleteMailsLiElement.appendChild(deleteMailsRecipientSpan);
        deleteMailsLiElement.appendChild(deleteMailsTitleSpan);

        elementForRemove.remove();

        ulDeleteList.appendChild(deleteMailsLiElement);
    }

    function sendEmail(li, recipient, title) {

        li.remove();

        const newLi = elementCreator(`li`);
        const spanRecipient = elementCreator(`span`, undefined, undefined, `To: ${recipient}`);
        const spanTitle = elementCreator(`span`, undefined, undefined, `Title: ${title}`);

        const div = elementCreator(`div`, `class`, `btn`);

        const deleteBtn = elementCreator(`button`, `type`, `submit`, `Delete`);
        deleteBtn.setAttribute(`class`, `delete`);

        div.appendChild(deleteBtn);

        newLi.appendChild(spanRecipient);
        newLi.appendChild(spanTitle);
        newLi.appendChild(div);

        ulSentList.appendChild(newLi);

        deleteBtn.addEventListener(`click`, deleteMails.bind(this, spanRecipient.textContent, spanTitle.textContent, newLi));

    }

    function elementCreator(elementType, attribute, attributeText, innerText) {
        const newElement = document.createElement(elementType);

        if (innerText !== undefined) {
            newElement.textContent = innerText;
        }

        if (attribute !== undefined) {
            newElement.setAttribute(attribute, attributeText);
        }

        return newElement;


    }
}
solve()