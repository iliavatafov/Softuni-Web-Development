function solve() {

    const inputElements = document.querySelectorAll(`input`);

    const fname = inputElements[0];
    const lname = inputElements[1];
    const email = inputElements[2];
    const birth = inputElements[3];
    const position = inputElements[4];
    const salary = inputElements[5];

    let hireBtn = document.querySelector(`#add-worker`);

    hireBtn.addEventListener(`click`, (ev) => {
        ev.preventDefault();

        if (fname.value !== `` && lname.value !== `` && email.value !== `` && birth.value !== `` && position.value !== `` && salary.value !== ``) {

            const tr = e(`tr`);

            e(`td`, fname.value, tr);
            e(`td`, lname.value, tr);
            e(`td`, email.value, tr);
            e(`td`, birth.value, tr);
            e(`td`, position.value, tr);
            e(`td`, salary.value, tr);

            const btnTd = e(`td`, undefined, tr);

            const firedBtn = e(`button`, `Fired`, btnTd);
            firedBtn.setAttribute(`class`, `fired`)

            const editBtn = e(`button`, `Edit`, btnTd);
            editBtn.setAttribute(`class`, `edit`);

            document.querySelector(`#tbody`).appendChild(tr);

            const bugetElement = document.querySelector(`#sum`);

            bugetElement.textContent = (Number(bugetElement.textContent) + Number(salary.value)).toFixed(2);

            clearInput(fname, lname, email, birth, position, salary);

            editBtn.addEventListener(`click`, editInformation.bind(this, tr, bugetElement));
            firedBtn.addEventListener(`click`, fireEmployee.bind(this, tr, bugetElement));
        }

    });

    function fireEmployee(tr, bugetElement) {
        bugetElement.textContent = (Number(bugetElement.textContent) - Number(tr.children[5].textContent)).toFixed(2);
        tr.remove();
    }

    function editInformation(tr, bugetElement) {

        fname.value = tr.children[0].textContent;
        lname.value = tr.children[1].textContent;
        email.value = tr.children[2].textContent;
        birth.value = tr.children[3].textContent;
        position.value = tr.children[4].textContent;
        salary.value = tr.children[5].textContent;

        bugetElement.textContent = (Number(bugetElement.textContent) - Number(salary.value)).toFixed(2);

        tr.remove();
    }

    function clearInput(fname, lname, email, birth, position, salary) {
        fname.value = ``;
        lname.value = ``;
        email.value = ``;
        birth.value = ``;
        position.value = ``;
        salary.value = ``;
    }

    function e(elementType, innerText, parentElement) {

        const newElement = document.createElement(elementType);
        newElement.textContent = innerText;

        if (parentElement !== undefined) {
            parentElement.appendChild(newElement);
        }

        return newElement;
    }
}
solve()